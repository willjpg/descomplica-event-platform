import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, CircleNotch, DiscordLogo, FileArrowDown, FrameCorners, Image, Lightning } from "phosphor-react";


import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Logo } from "./Logo";




interface VideoProps {

    lessonSlug: string;
}


export function Video(props: VideoProps) {

    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        },
        fetchPolicy: 'no-cache'
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <div className="2xl:mt[10vh] mx-0 mt-[30vh] flex items-center justify-center">
                    <CircleNotch className="animate-spin" size={32} />
                </div>

            </div>
        )
    }

    return (
        <>
            <div className="z-0 max-h-full flex-1 flex-col overflow-y-scroll scrollbar-none lg:scrollbar-thin lg:scrollbar-thumb-gray-600 lg:scrollbar-track-green-400">
                <div className="bg-gray-100 flex justify-center">
                    <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                        <Player>
                            <Youtube videoId={data.lesson.videoId} />
                            <DefaultUi />
                        </Player>
                    </div>
                </div>

                <div className="mx-auto max-w-[1100px] p-6 lg:mt-2">
                    <div className="flex gap-16 lg:flex-row lg:items-start flex-col lg:flex-shrink-0 xl:flex-row"> {/*responsividade flex-col lg:flex-shrink-0 xl:flex-row*/}
                        <div className="flex-1">
                            <h1 className="text-lg font-bold lg:text-2xl">
                                {data.lesson.title}
                            </h1>
                            <p className="mt-4 text-sm text-gray-800 leading-relaxed lg:text-base">
                                {data.lesson.description}
                            </p>


                            {data.lesson.teacher && (
                                <div className="flex items-center gap-4 mt-6">
                                    <img
                                        className="h-16 w-16 rounded-full border-2 border-green-400"
                                        src={data.lesson.teacher.avatarURL}
                                        alt="" />

                                    <div className="flex flex-col leading-relaxed">
                                        <strong className="font-bold text-lg block">{data.lesson.teacher.name}</strong>
                                        <span className="text-gray-800 text-sm block">{data.lesson.teacher.bio}</span>
                                    </div>
                                </div>
                            )}
                        </div>


                        <div className="flex flex-col gap-4 lg:w-auto w-full">
                            <a href="https://descomplica.com.br/" className="p-4 text-sm bg-green-400 text-white flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                                <DiscordLogo size={24} />
                                Comunidade no discord

                            </a>

                            <a href="https://descomplica.com.br/" className="p-4 text-sm border border-green-500 text-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-500 hover:text-white transition-colors">
                                <Lightning size={24} />
                                Acesse o desafio

                            </a>
                        </div>
                    </div>

                    <div className="gap-8 mt-20 flex flex-col lg:flex-shrink-0 xl:flex-row">
                        <a href="https://descomplica.com.br/" target={'_blank'}
                            className="bg-white rounded overflow-hidden flex items-stretch gap-6 shadow-lg shadow-gray-200  hover:bg-gray-400 transition-colors">

                            <div className="bg-green-400 p-8 flex items-center">
                                <FileArrowDown size={40} />
                            </div>
                            <div className="py-5 leading-relaxed">
                                <strong className=" text-2xl">Material complementar</strong>
                                <p className="text-sm text-gray-900 mt-2">
                                    Acesse o material complementar para acelerar o seu desenvolvimento
                                </p>
                            </div>
                            <div className="h-full p-6 flex items-center">
                                {/* <CaretRight size={24} /> */}
                            </div>

                        </a>


                        <a href="https://www.google.com.br/search?q=wallpaper+descomplica&ie=UTF-8&oe="
                            target={'_blank'}
                            className="bg-white rounded overflow-hidden flex items-stretch  gap-6 shadow-lg shadow-gray-200 hover:bg-gray-400 transition-colors">

                            <div className="bg-green-400 p-8 flex items-center">
                                <Image size={40} />
                            </div>
                            <div className="py-5 leading-relaxed">
                                <strong className="text-2xl">Wallpapers exclusivos</strong>
                                <p className="text-sm text-gray-900 mt-2">
                                    Baixe wallpapers exclusivos do Descomplica para o seu PC ou Smartphone
                                </p>
                            </div>
                            <div className="h-full p-6 flex items-center">
                                {/* <CaretRight size={24} /> */}
                            </div>

                        </a>



                    </div>
                </div>
                <div className="mt-8 pl-8 w-full py-2 flex items-center justify-between bg-white border-t border-gray-400">

                    <Logo />
                    <h1 className="pl-8 text-gray-400">Todos os direiros resevados.
                    </h1>
                    <div>
                        <h1 className="pr-8 text-gray-400">Políticas de privacidade.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )

}