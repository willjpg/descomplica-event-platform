import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";




export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading, error, data }] =
    useCreateSubscriberMutation()


  const alreadySubscribe = localStorage.getItem('subscribed')

  useEffect(() => {
    if (error) {
      
    }
    if (loading) {
      
    }
    if (data) {
      

      localStorage.setItem('subscribed', 'true')

      setTimeout(() => {
        navigate('/event/lesson/abertura-do-evento-desco-aprova')
      }, 1000)
    }
  }, [data, loading, error])

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();


     if (name.trim() !== '' && email.trim() !== '') {
      await createSubscriber({
        variables: {
          name,
          email
        }
      })
     }}



  return (
    <>
    <main className="min-h-screen bg-white bg-cover bg-no-repeat flex flex-col items-center">
      <div className="mx-auto mt-10 flex w-full max-w-[1100px] flex-col items-center justify-between gap-8 lg:mt-32 lg:flex-row lg:gap-0">
        <div className="flex w-full max-w-[312px] flex-col items-center justify-center md:max-w-[512px] lg:max-w-[640px] lg:items-start">
          
            <Logo />

            <h1 className="font-league font-bold text-black mt-8 text-[3.5rem] leading-tight">
              SUA <strong className="text-green-400">APROVAÇÃO</strong> COMPLETA SE INÍCIA AQUI, <strong className="text-green-400">DO ZERO</strong>, COM DESCOMPLICA
            </h1>

            <p className="font-bold mt-4 text-gray-700 leading-relaxed">Em apenas uma semana você será integrado a metodologia descomplica com desafios e prática com questões dos principais vestibulares do país para conquistar a tão sonhada vaga.</p>

          </div>
          <div className="pl-3 bg-black shadow-lg  rounded-3xl mb-8">
            <div className="p-8 bg-white border border-gray-900 rounded-3xl mb-3 lg:p-8">
            {!alreadySubscribe ? (
              <>
              <strong className="text-2xl mb-4 block text-black">Inscreva-se gratuitamente</strong>



              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                <input
                  className="bg-slate-200 rounded-full px-5 h-14 placeholder-gray-300"
                  type="text"
                  placeholder="Seu nome completo"
                  onChange={event => setName(event.target.value)}
                />

                <input
                  className="bg-slate-200 rounded-full px-5 h-14 placeholder-gray-300" 
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={event => setEmail(event.target.value)}
                />

                <button

                  type="submit"
                  disabled={loading}
                  className="mt-4 bg-green-400 uppercase py-4 rounded-3xl font-bold text-sm hover:bg-black text-white transition-colors disabled:opacity-50"
                >

                  Garantir minha vaga

                </button>

              </form>
              </>
            ) : (
              <div className="flex w-full flex-col gap-2">
                <span className="mb-6 block text-2xl font-bold text-gray-900">
                  Você já está dentro!
                </span>
                <button
                  className="mt-4 h-14 rounded-3xl bg-green-400 py-4 text-sm font-bold uppercase text-gray-700 transition-colors hover:bg-black hover:text-white disabled:opacity-50"
                  onClick={() => navigate('/event/lesson/abertura-do-evento-desco-aprova')}
                >
                  Acessar Aulas
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      

      <img
        src="https://i.imgur.com/iESz3Jv.png"
        className="mt-5"
        alt="Fundo da pagina"
      />
      <img
        src="https://i.imgur.com/0DuhkpM.png"
        className=""
        alt="Fundo da pagina"
      />
      <div className="pl-8 w-full py-5 flex items-center justify-between bg-white border-t border-gray-400">
        
        <Logo/> 
        <h1 className="pl-8 text-gray-400">Todos os direiros resevados
        </h1>
        <div>
        <h1 className="pr-8 text-gray-400">Politicas de provacidade
        </h1>
        </div>
        
      </div>

    </main>
    </>
  )
}