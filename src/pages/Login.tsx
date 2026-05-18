import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";

// ============================================================
// 👇 ISI URL WEBSITE ABSENSI KARYAWAN ANDA DI SINI 👇
// Contoh: "https://absensi.dg-komputer.com"
// Kalau dikosongkan, tombol otomatis dinonaktifkan.
// ============================================================
const ABSENSI_URL = "";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // TODO: ganti dengan logic login asli Anda
      await new Promise((r) => setTimeout(r, 600));
      navigate("/");
    } catch (err: any) {
      setError(err?.message ?? "Gagal masuk");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Logo + Header */}
        <div className="flex flex-col items-center mb-6">
          {/* Logo "DG" — tidak akan hilang karena pakai inline SVG/text, bukan file gambar */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-3 shadow-md">
            <span className="text-white font-bold text-xl tracking-tight">DG</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">DG-KOMPUTER</h1>
          <p className="text-sm text-gray-500 mt-1">
            Sistem manajemen pelanggan internet
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-blue-50/40 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email@contoh.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black text-white font-medium py-2.5 hover:bg-gray-900 transition disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        {/* Daftar */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-red-500 font-medium hover:underline">
            Daftar
          </Link>
        </p>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400 uppercase tracking-wide">
            Akses lain
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Link ke website absensi karyawan — buka URL EKSTERNAL di tab baru */}
        {ABSENSI_URL ? (
          <a
            href={ABSENSI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 hover:border-gray-400 active:scale-[0.99] transition"
          >
            <ExternalLink className="h-4 w-4" />
            Link ke website absensi karyawan
          </a>
        ) : (
          <button
            type="button"
            disabled
            title="Isi dulu ABSENSI_URL di bagian atas file Login.tsx"
            className="flex items-center justify-center gap-2 w-full rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-400 cursor-not-allowed"
          >
            <ExternalLink className="h-4 w-4" />
            Link ke website absensi karyawan
          </button>
        )}

        <p className="text-center text-[11px] text-gray-400 mt-3">
          Khusus untuk karyawan DG-KOMPUTER
        </p>
      </div>
    </div>
  );
}
