'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import '../auth.css';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        router.push('/dashboard');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        setError(error.message);
        setLoading(false);
      }
    } catch {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex items-center">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              Edaptify
            </span>
          </div>

          {/* Welcome Text */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600 mb-8">
            Enter to get unlimited access to data & information.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Sign In Form */}
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                icon={<Mail className="w-5 h-5 text-gray-400" />}
                className="border-gray-200 bg-white"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-gray-700 text-sm font-medium">
                  Password <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  icon={<Lock className="w-5 h-5 text-gray-400" />}
                  className="border-gray-200 bg-white"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-primary-500 hover:underline font-medium"
              >
                Forgot your password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full rounded-lg border-0 bg-[#FF6B6B] hover:bg-[#FF5252] py-3"
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Log In'}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or, Login with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <button
            className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.221 19.9895 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                fill="#34A853"
              />
              <path
                d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <span className="text-sm text-gray-700 font-medium">
              Sign up with Google
            </span>
          </button>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link
                href="/auth/signup"
                className="text-[#FF6B6B] hover:underline font-medium"
              >
                Register here
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-indigo-700 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center p-12 z-10">
          <div className="max-w-lg">
            {/* Visual elements inspired by the reference image */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="aspect-square bg-blue-400 rounded-full opacity-80 float"></div>
              <div className="aspect-square bg-yellow-300 rounded-lg transform rotate-45 opacity-80 float-rotate float-delay-1"></div>
              <div className="aspect-square bg-teal-400 rounded-lg opacity-80 float float-delay-2"></div>
              <div className="aspect-square bg-[#FF6B6B] rounded-lg opacity-80 float float-delay-3"></div>
              <div className="aspect-square bg-indigo-500 rounded-full opacity-80 float float-delay-2"></div>
              <div className="aspect-square bg-purple-400 rounded-lg transform rotate-12 opacity-80 float float-delay-1"></div>
            </div>

            <div className="w-16 h-16 mb-8 bg-yellow-300 rounded-lg transform rotate-12 opacity-80 float-rotate float-delay-3"></div>

            <div className="mb-6 flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-80 float">
                <div className="w-6 h-6 bg-indigo-600 rounded-sm transform rotate-45"></div>
              </div>
              <div className="w-12 h-12 bg-white rounded-full -ml-4 flex items-center justify-center opacity-80 float float-delay-2">
                <div className="w-6 h-6 bg-[#FF6B6B] rounded-sm"></div>
              </div>
            </div>

            <div className="w-full h-2 bg-teal-400 rounded-full mb-4 float float-delay-1"></div>
            <div className="w-3/4 h-2 bg-white rounded-full mb-8 float float-delay-3"></div>

            <div className="grid grid-cols-10 gap-1 mb-8">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 bg-white rounded-full float float-delay-${i % 3}`}
                ></div>
              ))}
            </div>

            <div className="w-24 h-24 rounded-full bg-yellow-400 absolute bottom-20 right-20 opacity-60 pulse"></div>
            <div className="w-40 h-40 rounded-full bg-[#FF6B6B] absolute -bottom-20 -right-20 opacity-60 pulse pulse-delay-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
