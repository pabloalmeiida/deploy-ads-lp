import React from 'react';
import { Database, Zap, Layout, Send, CheckCircle2 } from 'lucide-react';

export const AutomationVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto perspective-1000">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full" />
      
      <div className="relative glass-card p-6 rounded-2xl border border-slate-700/50 animate-float">
        {/* Header UI Mockup */}
        <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-xs font-mono text-slate-400">status: active</div>
        </div>

        {/* Workflow Nodes */}
        <div className="flex flex-col gap-6 relative">
          {/* Connector Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-500 to-indigo-500 opacity-50" />

          {/* Node 1: Input */}
          <div className="relative flex items-center gap-4 group">
            <div className="z-10 w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center shadow-lg group-hover:border-brand-400 transition-colors">
              <Database className="w-6 h-6 text-brand-400" />
            </div>
            <div className="flex-1 p-3 rounded-lg bg-slate-800/50 border border-slate-700">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Source</div>
              <div className="text-sm font-medium text-white">Google Drive / Planilha</div>
            </div>
          </div>

          {/* Node 2: Processing */}
          <div className="relative flex items-center gap-4 group">
             <div className="z-10 w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center shadow-lg group-hover:border-brand-400 transition-colors">
              <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            <div className="flex-1 p-3 rounded-lg bg-slate-800/50 border border-slate-700">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Automation</div>
              <div className="text-sm font-medium text-white">Processando 100 Criativos...</div>
              <div className="w-full bg-slate-700 h-1.5 mt-2 rounded-full overflow-hidden">
                <div className="bg-brand-500 h-full w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Node 3: Output */}
          <div className="relative flex items-center gap-4 group">
             <div className="z-10 w-12 h-12 rounded-xl bg-indigo-900 border border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 p-3 rounded-lg bg-indigo-900/20 border border-indigo-500/30">
              <div className="text-xs text-indigo-300 uppercase tracking-wider">Meta Ads API</div>
              <div className="text-sm font-medium text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Campanhas Publicadas
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stat Card */}
        <div className="absolute -right-8 -bottom-8 glass-card p-4 rounded-xl border-l-4 border-green-500 shadow-2xl animate-pulse-slow hidden sm:block">
          <div className="text-xs text-slate-400 mb-1">Dinheiro Economizado</div>
          <div className="text-2xl font-bold text-white">~ R$ 2k / mês</div>
        </div>
      </div>
    </div>
  );
};