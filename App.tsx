import React, { useState } from 'react';
import { 
  Zap, 
  Layers, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  BarChart3, 
  ShieldCheck,
  Terminal,
  Linkedin,
  Activity,
  ArrowRight,
  PlayCircle,
  Clock,
  Banknote,
  AlertTriangle,
  Code2,
  UserCog,
  Briefcase,
  Users,
  CalendarOff
} from 'lucide-react';
import { Section } from './components/ui/Section';
import { Button } from './components/ui/Button';
import { AutomationVisual } from './components/visuals/AutomationVisual';
import { MetricsVisual } from './components/visuals/MetricsVisual';
import { Modal } from './components/ui/Modal';
import { CheckoutForm } from './components/forms/CheckoutForm';

export default function App() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 selection:text-brand-100">
      
      {/* Modal de Checkout */}
      <Modal 
        isOpen={isCheckoutModalOpen} 
        onClose={() => setIsCheckoutModalOpen(false)}
        title="Finalizar Inscrição"
      >
        <CheckoutForm />
      </Modal>

      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 glass-card border-b border-white/5 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(24,119,242,0.5)]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Deploy <span className="text-brand-400">Ads</span></span>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="px-4 py-2 text-xs h-10 border-brand-500/50 text-white hover:bg-brand-600/20" onClick={scrollToPrice} withIcon={false}>
                ACESSAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-32 lg:pt-48 grid-bg relative">
        {/* Abstract background element */}
        <div className="absolute top-40 left-[-100px] w-96 h-96 bg-brand-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-300 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>Sistema Validado &bull; API Oficial Meta</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Sua Operação de Tráfego no <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-200">Piloto Automático</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl">
              Cansado de perder noites de sono e finais de semana subindo campanhas? Tenha um "Gestor" que não tira férias, não fica doente e <strong className="text-brand-200">não gera risco trabalhista</strong>. Foque em prospectar enquanto o robô opera.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button onClick={scrollToPrice} className="w-full sm:w-auto shadow-brand-500/40">
                QUERO ESCALAR MINHA OPERAÇÃO
              </Button>
              {/* 
              <button onClick={scrollToPrice} className="flex items-center justify-center gap-2 px-6 py-4 text-slate-300 font-medium hover:text-white transition-colors">
                <PlayCircle className="w-5 h-5 text-brand-500" />
                <span>Ver como funciona</span>
              </button> 
              */}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 backdrop-blur-sm w-fit">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="User" 
                    className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover"
                  />
                ))}
              </div>
              <p><strong className="text-white">50+ gestores</strong> já usam o sistema</p>
            </div>
          </div>
          
          <div className="relative z-10">
             <AutomationVisual />
             {/* Floating Badge */}
             <div className="absolute top-10 right-0 lg:-right-10 animate-float-delayed glass-card p-3 rounded-lg border-l-4 border-brand-500 shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-brand-500/20 rounded-md text-brand-400">
                      <Activity size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] text-slate-400 uppercase">Tempo Economizado</div>
                      <div className="font-bold text-white text-sm">~10h / semana</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section darker id="benefits">
        <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">O Fim das Contratações Erradas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tá cansado de treinar gestores que te deixam na mão? Ou de perder de conviver com sua família porque precisa subir anúncios no fim de semana?
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-6">
             {/* Visual Break Component */}
             <div className="glass-card p-6 rounded-2xl border border-brand-500/20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <BarChart3 className="text-brand-500" />
                   Monitoramento em Tempo Real
                </h3>
                <p className="text-slate-400 text-sm mb-6">Tenha certeza absoluta que seus criativos estão subindo corretamente.</p>
                <div className="flex justify-center">
                   <MetricsVisual />
                </div>
             </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Zero Risco Trabalhista",
                desc: "Esqueça CLT, processos e dores de cabeça. Um ativo da sua empresa que não te processa e nem pede aumento."
              },
              {
                icon: <CalendarOff className="w-6 h-6" />,
                title: "Disponibilidade Infinita",
                desc: "Sobe anúncios sábado à noite, domingo de manhã e feriados. Sem cara feia, sem 'banco de horas' e sem desculpas."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Fim do Treinamento",
                desc: "Pare de gastar energia ensinando quem vai te deixar na mão depois. O robô aprende uma vez e nunca esquece."
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Instalação 'Done-For-You'",
                desc: "Eu entro no seu servidor e configuro tudo. Você recebe a chave do carro ligado e pronto para acelerar."
              },
              {
                icon: <Banknote className="w-6 h-6" />,
                title: "Sem Mensalidades",
                desc: "Diferente de SaaS caros ou salários mensais, aqui você paga uma vez e o sistema é seu para sempre."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Velocidade Extrema",
                desc: "Suba testes de criativos, ofertas e públicos em massa. Teste rápido, escale rápido."
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:border-brand-500/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-brand-400 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-lg group-hover:shadow-brand-500/25">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="secondary" onClick={scrollToPrice}>
            QUERO PARAR DE PERDER TEMPO
          </Button>
        </div>
      </Section>

      {/* Step by Step - How it works (New Section) */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Como funciona a entrega?</h2>
          <p className="text-slate-400">Processo simples e direto. Sem enrolação.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-500/0 via-brand-500/50 to-brand-500/0 border-t border-dashed border-slate-600"></div>

          {[
            {
              step: "01",
              title: "Você adquire o Setup",
              desc: "Pagamento único e seguro. Acesso imediato à área de membros."
            },
            {
              step: "02",
              title: "Eu faço a instalação",
              desc: "Em até 48h úteis, configuro o n8n e a API no seu servidor VPS."
            },
            {
              step: "03",
              title: "Você escala",
              desc: "Te entrego o painel pronto e uma aula de como usar. É só rodar."
            }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center text-2xl font-bold text-brand-500 mb-6 shadow-xl relative group hover:border-brand-500 transition-colors">
                {item.step}
                <div className="absolute inset-0 bg-brand-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison Section (Darker) */}
      <Section darker>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Positive Side */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-brand-500/30 transition-colors rounded-3xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-sm">
                 <CheckCircle2 size={18} />
               </span>
               A automação é perfeita para:
             </h3>
             <ul className="space-y-4">
               {[
                 "Gestores de tráfego com múltiplos clientes",
                 "Donos de Agência focados em escala (LTV)",
                 "Quem precisa de férias mas não tem quem cubra",
                 "Quem odeia trabalho repetitivo e manual"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-300">
                   <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* Negative Side */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 relative opacity-60 hover:opacity-100 transition-opacity">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
               <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm">
                 <XCircle size={18} />
               </span>
               Não compre se você:
             </h3>
             <ul className="space-y-4">
               {[
                 "Sobe menos de 5 anúncios por semana",
                 "Gosta de configurar gerenciador de anúncios na mão",
                 "Não quer crescer sua operação agora",
                 "Está procurando uma fórmula mágica de dinheiro fácil"
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-400">
                   <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" onClick={scrollToPrice}>
            QUERO VERIFICAR DISPONIBILIDADE
          </Button>
        </div>
      </Section>

      {/* Social Proof (Light - Removed darker) */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">O que dizem os gestores?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "Eu gastava 3 horas toda segunda-feira subindo campanhas. Hoje eu gasto 15 minutos conferindo se tá tudo ok.",
              author: "Ricardo M.",
              role: "Dono de Agência"
            },
            {
              quote: "A melhor parte é não precisar lidar com código. O Pablo entregou tudo pronto, só apertei o play.",
              author: "Ana S.",
              role: "Gestora de E-commerce"
            },
            {
              quote: "O ROI dessa automação é absurdo. Se eu pagasse um estagiário pra fazer isso, gastaria 10x mais.",
              author: "Felipe K.",
              role: "Head de Tráfego"
            }
          ].map((testimonial, i) => (
            <div key={i} className="glass-card p-8 rounded-xl border-t border-slate-700 relative">
              <div className="absolute -top-4 left-8 text-6xl text-brand-900 font-serif leading-none opacity-50">"</div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="w-4 h-4 text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic relative z-10">{testimonial.quote}</p>
              <div className="border-t border-slate-700/50 pt-4">
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-xs text-brand-400 uppercase tracking-wide">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
             <Button onClick={scrollToPrice}>QUERO TER ESSE RESULTADO TAMBÉM</Button>
        </div>
      </Section>

      {/* Pricing Section (Darker) */}
      <Section darker id="pricing" className="py-24 relative overflow-hidden">
         {/* Background glow for pricing - Simplified background */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">
           
           <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Quanto custa a sua liberdade?</h2>
             <p className="text-slate-400">Compare o custo de continuar fazendo do jeito difícil versus o jeito inteligente.</p>
           </div>

           {/* Price Anchoring Cards - Now visible by default with hover lift */}
           <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
              
              {/* Card 1: Gestor */}
              <div className="glass-card p-6 rounded-xl border border-red-900/30 bg-red-950/10 hover:border-red-500/50 hover:bg-red-900/20 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-900/20">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-red-900/20 rounded text-red-500">
                     <UserCog size={24} />
                   </div>
                   <h3 className="font-bold text-slate-300">Gestor Operacional</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-400 mb-6">
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Salário + Encargos</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Risco Trabalhista</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Férias e Atestados</li>
                </ul>
                <div className="border-t border-red-900/20 pt-4">
                   <div className="text-xs text-red-400 font-medium uppercase">Custo Médio</div>
                   <div className="text-xl font-bold text-white">R$ 1.500 <span className="text-sm font-normal text-slate-500">/mês</span></div>
                </div>
              </div>

              {/* Card 2: Dev */}
              <div className="glass-card p-6 rounded-xl border border-red-900/30 bg-red-950/10 hover:border-red-500/50 hover:bg-red-900/20 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-900/20">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-red-900/20 rounded text-red-500">
                     <Code2 size={24} />
                   </div>
                   <h3 className="font-bold text-slate-300">Dev Especialista n8n</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-400 mb-6">
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Custo de Setup Alto</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Cobra por Alteração</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Difícil de Encontrar</li>
                </ul>
                <div className="border-t border-red-900/20 pt-4">
                   <div className="text-xs text-red-400 font-medium uppercase">Custo Médio</div>
                   <div className="text-xl font-bold text-white">R$ 3.000 <span className="text-sm font-normal text-slate-500">/setup</span></div>
                </div>
              </div>

              {/* Card 3: SaaS */}
              <div className="glass-card p-6 rounded-xl border border-red-900/30 bg-red-950/10 hover:border-red-500/50 hover:bg-red-900/20 transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-900/20">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-red-900/20 rounded text-red-500">
                     <Layers size={24} />
                   </div>
                   <h3 className="font-bold text-slate-300">Assinaturas SaaS</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-400 mb-6">
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Zapier / Make Pro</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Limite de Tasks</li>
                  <li className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-red-500" /> Mensalidade Eterna</li>
                </ul>
                <div className="border-t border-red-900/20 pt-4">
                   <div className="text-xs text-red-400 font-medium uppercase">Custo Médio</div>
                   <div className="text-xl font-bold text-white">R$ 250 <span className="text-sm font-normal text-slate-500">/mês</span></div>
                </div>
              </div>

           </div>
           
           <div className="max-w-lg mx-auto">
             
             {/* Anchor Pricing Label with Padding */}
             <div className="text-center py-8 my-4">
                <p className="text-slate-400 text-sm">
                  Valor real de mercado (Dev + Servidor + Configuração): <span className="line-through text-slate-500 font-medium">R$ 3.250,00</span>
                </p>
             </div>

             <div className="relative group">
               {/* Gradient Border Effect - Meta Blue */}
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-blue-400 to-brand-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
               
               <div className="relative bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800 shadow-2xl">
                  
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-900/50 whitespace-nowrap uppercase tracking-wide flex items-center gap-2">
                     <Zap size={14} className="fill-current" /> Oferta Limitada
                  </div>

                  <div className="text-center mt-8 mb-8">
                    <h3 className="text-xl text-slate-300 font-medium mb-4 uppercase tracking-widest text-xs">Setup Completo + Vitalício</h3>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-slate-400 font-medium text-xl mt-4">12x de</span>
                      <span className="text-[4.5rem] leading-none font-extrabold text-white tracking-tighter">
                        51,40
                      </span>
                    </div>
                    <div className="text-brand-300 font-medium text-base bg-brand-900/20 border border-brand-500/20 inline-block px-4 py-1 rounded-full">
                      Pagamento Único de R$ 497,00
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                     <div className="flex items-center gap-4 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                       <span className="font-medium">Instalação Completa do n8n</span>
                     </div>
                     <div className="flex items-center gap-4 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                       <span className="font-medium">Configuração API Meta Ads</span>
                     </div>
                     <div className="flex items-center gap-4 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                       <span className="font-medium">Painel de Upload Simplificado</span>
                     </div>
                     <div className="flex items-center gap-4 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                       <span className="font-medium">Templates de Planilha Validada</span>
                     </div>
                     <div className="flex items-center gap-4 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                       <span className="font-medium text-brand-200">Acesso Vitalício ao Código</span>
                     </div>
                     <div className="flex items-center gap-4 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                       <span className="font-medium text-brand-200">Zero Mensalidades</span>
                     </div>
                     <div className="flex items-center gap-4 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><CheckCircle2 size={14} /></div>
                       <span className="font-medium text-white font-bold">Bônus: Aula de Operação</span>
                     </div>
                  </div>

                  <Button fullWidth onClick={openCheckout} className="text-lg py-5 group-hover:shadow-brand-500/50 bg-gradient-to-r from-brand-600 to-blue-500">
                    QUERO MINHA AUTOMAÇÃO
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-slate-800">
                     <div className="flex items-center gap-2 text-xs text-slate-500">
                        <ShieldCheck size={16} className="text-green-500" />
                        Compra Segura
                     </div>
                     <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 size={16} className="text-green-500" />
                        Garantia de 7 Dias
                     </div>
                  </div>
               </div>
             </div>
           </div>
         </div>
      </Section>

      {/* Bio Section */}
      <Section>
        <div className="max-w-5xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-slate-800 border-4 border-slate-700 shrink-0 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <img 
                    src="https://i.ibb.co/6J8ZB6vT/file.jpg" 
                    alt="Pablo Almeida" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white p-3 rounded-xl border-4 border-slate-900 shadow-xl">
                  <Terminal size={24} />
                </div>
             </div>
             
             <div className="flex-1 text-left w-full">
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Quem vai implementar?</h2>
               <div className="text-brand-400 font-bold uppercase tracking-wide text-sm mb-6">Pablo Almeida &bull; Automation Engineer</div>
               <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                 Sou Automation Engineer com background em tráfego pago. Criei essa solução porque cansei de ver gestores perdendo finais de semana subindo campanha manual.
                 <br /><br />
                 Minha missão é simples: <strong>Tirar o trabalho braçal da sua mão</strong> para que você foque no que traz ROI de verdade.
               </p>
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-start">
                 <Button variant="outline" onClick={scrollToPrice} withIcon={false}>
                   QUERO TE CONTRATAR
                 </Button>
                 <a href="https://www.linkedin.com/in/opabloalmeida" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-4 py-2">
                   <Linkedin className="w-5 h-5 text-brand-500" />
                   <span>/opabloalmeida</span>
                 </a>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* FAQ (Darker) */}
      <Section darker>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Tenho custo mensal com ferramenta?", a: "Você precisará apenas de uma VPS simples (custo médio R$ 40-80/mês). Sem mensalidades caras de SaaS." },
              { q: "Preciso saber programar?", a: "Zero. Eu entrego instalado. Você só preenche uma planilha/formulário e a mágica acontece." },
              { q: "Isso dá bloqueio no Facebook?", a: "Não. Utilizamos a API Oficial da Meta e boas práticas de intervalo de tempo. É muito mais seguro que ferramentas piratas." },
              { q: "Serve para contingência?", a: "Sim! Você pode configurar múltiplas contas de anúncio e perfis diferentes." },
              { q: "Quanto tempo demora a entrega?", a: "Após a confirmação, entro em contato para pegar os acessos do servidor e instalo em até 48h úteis." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer group">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                  <span className="text-brand-500 group-hover:scale-110 transition-transform">?</span>
                  {item.q}
                </h3>
                <p className="text-slate-400 pl-6 border-l-2 border-slate-800 group-hover:border-brand-500/30 ml-1 transition-colors">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button onClick={scrollToPrice}>QUERO AUTOMATIZAR AGORA</Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Deploy Ads. Todos os direitos reservados.</p>
        <p className="text-xs mt-2 text-slate-700">Este site não faz parte do site do Facebook ou Facebook Inc.</p>
      </footer>
    </div>
  );
}