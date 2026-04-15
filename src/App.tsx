/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  School,
  ClipboardList,
  ShieldAlert,
  Printer,
  LayoutDashboard,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  BookOpen,
  ShieldCheck
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const apps = [
  {
    id: "secma",
    name: "SecMA",
    description: "Portal administrativo para gestão de documentos, matrículas e processos da secretaria escolar.",
    url: "https://frontend-production-a624.up.railway.app/",
    icon: ClipboardList,
    tag: "Secretaria"
  },
  {
    id: "conectama",
    name: "ConectaMA",
    description: "Sistema inteligente para registro e acompanhamento de ocorrências disciplinares estudantis.",
    url: "https://studentsma-production.up.railway.app/",
    icon: ShieldAlert,
    tag: "Disciplina"
  },
  {
    id: "printma",
    name: "PrintMA",
    description: "Controle e gestão de impressões para otimização de recursos e suporte aos docentes.",
    url: "https://printma.vercel.app/login",
    icon: Printer,
    tag: "Impressão"
  },
  {
    id: "gestaoma",
    name: "GestaoMA",
    description: "Dashboard completo para gestão pedagógica, administrativa e indicadores de desempenho.",
    url: "https://projeto-ma-eosin.vercel.app/",
    icon: LayoutDashboard,
    tag: "Gestão"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-[#1e293b] flex flex-col">
      {/* School Header Image */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <img
            src="/timbrado.png"
            alt="Colégio Estadual Professora Maria Anita - Governo do Estado da Bahia"
            className="max-h-32 w-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation / Header */}
      <header className="bg-[#005696] py-4 px-12 text-white flex justify-between items-center shadow-md z-50">
        <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
          <School className="text-[#00AEEF]" size={24} />
          <span>Portal <span className="text-[#E91E63]">Maria Anita</span></span>
        </div>
        <div className="text-sm font-medium opacity-90 hidden md:block">
          Gestão Escolar Unificada • Bahia
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 container mx-auto px-12 py-10 flex flex-col gap-8">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#005696]">
              Produtividade e Gestão Educacional
            </h1>
            <p className="text-lg text-[#64748b] leading-relaxed">
              O ecossistema digital do Colégio Estadual Professora Maria Anita. Soluções inteligentes para simplificar a vida de alunos, professores e administração.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[300px] lg:h-[400px] rounded-2xl relative overflow-hidden shadow-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000"
              alt="Modern School Environment"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Apps Grid */}
        <div id="apps" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full flex flex-col bg-white border-[#e2e8f0] rounded-2xl p-6 relative transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl border-t-4" style={{ borderTopColor: app.id === "secma" ? "#005696" : app.id === "conectama" ? "#00AEEF" : app.id === "printma" ? "#E91E63" : "#FFC107" }}>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-[#ecfdf5] rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-wider">Online</span>
                  </div>

                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner",
                    app.id === "secma" ? "bg-blue-50 text-[#005696]" :
                      app.id === "conectama" ? "bg-cyan-50 text-[#00AEEF]" :
                        app.id === "printma" ? "bg-pink-50 text-[#E91E63]" :
                          "bg-amber-50 text-[#FFC107]"
                  )}>
                    <Icon size={28} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl font-bold text-[#005696] mb-2 group-hover:text-[#00AEEF] transition-colors">{app.name}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-8 flex-grow">
                    {app.description}
                  </p>

                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants(),
                      "w-full font-bold rounded-xl py-6 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-xl",
                      app.id === "secma" ? "bg-[#005696] hover:bg-[#003d6b]" :
                        app.id === "conectama" ? "bg-[#00AEEF] hover:bg-[#008cc0]" :
                          app.id === "printma" ? "bg-[#E91E63] hover:bg-[#c2185b]" :
                            "bg-[#FFC107] hover:bg-[#ffa000] text-slate-900"
                    )}
                  >
                    Acessar {app.tag}
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-12 border-t border-[#e2e8f0] bg-white text-xs text-[#64748b] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-slate-900">Colégio Estadual Professora Maria Anita</div>
          <div>© 2024 Todos os direitos reservados.</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium border border-green-100 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Sistemas Operacionais
          </div>
          <div className="font-medium">Secretaria da Educação • Bahia</div>
        </div>
      </footer>
    </div>
  );
}
