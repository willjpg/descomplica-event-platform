import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';


interface LessonProps {
   title: string;
   slug: string;
   availableAt: Date;
   type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
   const { slug: slugRef } = useParams<{ slug: string }>()
   const isAvailable = isPast(availableAt)
   const availableDateFormatted = format(
     availableAt,
     "EEE' • 'd' de 'MMMM' • 'k'h'mm",
     {
       locale: ptBR
     }
   )

   
   return (
      <Link
        to={isAvailable ? `/event/lesson/${slug}` : ''}
        className={`${!isAvailable && 'cursor-not-allowed'} group`}
      >
        <span className="text-gray-300">{availableDateFormatted}</span>
  
        <div
          className={`${
            slugRef &&
            slugRef === slug &&
            'border-transparent bg-green-400 before:bg-green-400 '
          } relative mt-2 rounded border border-gray-200 p-4 transition-[border] before:absolute before:left-[-7px] before:top-1/2 before:z-10 before:-mt-2 before:h-[14px] before:w-[14px] before:rotate-45 before:rounded-[2px] before:content-[""] ${
            !isAvailable
              ? 'group-hover:border-red-500'
              : 'group-hover:border-green-400'
          }`}
        >
          <header className="flex justify-between">
            {isAvailable ? (
              <span
                className={`${
                  slugRef && slugRef === slug ? 'text-black' : 'text-green-400'
                } flex items-center gap-2 text-sm font-medium`}
              >
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
                <Lock size={20} />
                Em breve
              </span>
            )}
  
            <span
              className={`${
                slugRef && slugRef === slug ? 'border-green-500' : 'border-green-400'
              } flex items-center rounded border px-2 py-[0.125rem] text-xs font-bold uppercase text-black`}
            >
              {type === 'live' ? 'Ao vivo' : 'Aula prática'}
            </span>
          </header>
  
          <p
            className={`mt-4 font-bold ${
              slugRef && slugRef === slug ? 'text-black' : 'text-gray-600'
            }`}
          >
            {title}
          </p>
        </div>
      </Link>
    )
  }