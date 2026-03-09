import { Heart } from 'lucide-react';
import FlowerModel from './components/FlowerModel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-[700px] md:h-full rounded-2xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-sm">
            <FlowerModel />
          </div>

          <div className="text-center md:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-rose-600 tracking-tight">
                Hola
              </h1>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Heart className="w-8 h-8 text-pink-500 animate-heartbeat fill-pink-500" />
                <h2 className="text-5xl md:text-6xl font-semibold text-pink-600">
                  Te quiero
                </h2>
                <Heart className="w-8 h-8 text-pink-500 animate-heartbeat fill-pink-500" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              Mira estas hermosas flores que girar para ti
            </p>

            <div className="flex justify-center md:justify-start space-x-2 pt-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
