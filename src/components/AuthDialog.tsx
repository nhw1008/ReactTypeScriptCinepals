import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "login" | "signup";
  onSuccess?: () => void;
}

export function AuthDialog({
  open,
  onOpenChange,
  mode: initialMode,
  onSuccess,
}: AuthDialogProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Dialog가 열릴 때마다 mode를 initialMode로 동기화
  useEffect(() => {
    if (open) {
      setMode(initialMode);
      setEmail("");
      setPassword("");
    }
  }, [open, initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast.success("회원가입 완료!", {
            description: "로그인하여 서비스를 이용해보세요.",
          });
          setMode("login");
          setPassword("");
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast.success("로그인 성공!", {
            description: `환영합니다, ${email}님!`,
          });
          onOpenChange(false);
          setEmail("");
          setPassword("");
          onSuccess?.();
        }
      }
    } catch (error: any) {
      toast.error(mode === "signup" ? "회원가입 실패" : "로그인 실패", {
        description: error.message || "다시 시도해주세요.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#242a32] border-[#4e5968] text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {mode === "signup" ? "회원가입" : "로그인"}
          </DialogTitle>
          <DialogDescription className="text-[#4e5968]">
            {mode === "signup"
              ? "Cinepals에 가입하고 영화 리뷰를 작성해보세요"
              : "계정에 로그인하여 리뷰와 찜한 영화를 확인하세요"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              이메일
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#4e5968]/20 border-[#4e5968] text-white placeholder:text-[#4e5968]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              비밀번호
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="bg-[#4e5968]/20 border-[#4e5968] text-white placeholder:text-[#4e5968]"
            />
            {mode === "signup" && (
              <p className="text-xs text-[#4e5968]">
                최소 6자 이상 입력해주세요
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#fbb343] text-[#242a32] hover:bg-[#fbb343]/90 h-11"
          >
            {loading
              ? "처리 중..."
              : mode === "signup"
              ? "회원가입"
              : "로그인"}
          </Button>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setPassword("");
              }}
              className="text-sm text-[#4e5968] hover:text-white transition-colors"
            >
              {mode === "login"
                ? "계정이 없으신가요? 회원가입"
                : "이미 계정이 있으신가요? 로그인"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}