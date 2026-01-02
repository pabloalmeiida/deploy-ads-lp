import React from 'react';
import { TrendingUp, Users, MousePointer2 } from 'lucide-react';

export const MetricsVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-blue-400 rounded-2xl blur opacity-30 animate-pulse"></div>
        <div className="relative glass-card rounded-xl p-5 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Performance Live</h4>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[10px] text-red-400 font-mono">REC</span>
                </div>
            </div>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-brand-900/30 text-brand-400">
                            <TrendingUp size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">ROAS Médio</div>
                            <div className="text-sm font-bold text-white">4.85x</div>
                        </div>
                    </div>
                    <span className="text-xs text-green-400 font-medium">+12%</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-purple-900/30 text-purple-400">
                            <MousePointer2 size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">CTR (Link)</div>
                            <div className="text-sm font-bold text-white">2.4%</div>
                        </div>
                    </div>
                    <span className="text-xs text-green-400 font-medium">+0.8%</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                     <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-blue-900/30 text-blue-400">
                            <Users size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Criativos Ativos</div>
                            <div className="text-sm font-bold text-white">84/100</div>
                        </div>
                    </div>
                    <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-500 w-[84%]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};