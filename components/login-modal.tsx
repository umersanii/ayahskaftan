"use client"

import { useState } from "react"
import { X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [isResetPassword, setIsResetPassword] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <h2 className="text-lg font-semibold">
                {isResetPassword ? "Reset your password" : isRegister ? "Register" : "Great to have you back!"}
              </h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {isResetPassword ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="reset-email">Email</Label>
                <Input id="reset-email" type="email" placeholder="Enter your email" />
              </div>
              <Button className="w-full">Reset Password</Button>
              <Button variant="ghost" className="w-full" onClick={() => setIsResetPassword(false)}>
                Cancel
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>

              {!isRegister && (
                <div className="text-right">
                  <button className="text-sm text-blue-600 hover:underline" onClick={() => setIsResetPassword(true)}>
                    Forgot your password?
                  </button>
                </div>
              )}

              <Button className="w-full">{isRegister ? "Register" : "Log In"}</Button>

              <div className="text-center text-sm text-gray-600">or</div>

              <div className="text-center">
                {isRegister ? (
                  <span className="text-sm">
                    Already have an account?{" "}
                    <button className="text-blue-600 hover:underline" onClick={() => setIsRegister(false)}>
                      Back to login
                    </button>
                  </span>
                ) : (
                  <span className="text-sm">
                    Don&apos;t have an account?{" "}
                    <button className="text-blue-600 hover:underline" onClick={() => setIsRegister(true)}>
                      Register now
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
