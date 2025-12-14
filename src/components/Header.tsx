import { useState, useEffect } from "react";
import { CinepalsLogo } from "./CinepalsLogo";
import { Button } from "./ui/button";
import { User, Search, LogOut, Heart } from "lucide-react";
import { supabase } from "../lib/supabase";
import { AuthDialog } from "./AuthDialog";
import { SearchDialog } from "./SearchDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { toast } from "sonner@2.0.3";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 로그인 상태 확인
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("로그아웃 되었습니다");
  };

  const openAuthDialog = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setAuthDialogOpen(true);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#242a32]/95 backdrop-blur-sm border-b border-[#4e5968]/30"
          : "bg-transparent"
      }`}
    >
      <div className="px-20 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="font-[Sofia_Sans] text-[16px]">
            <CinepalsLogo className="h-14 w-auto cursor-pointer" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/movies" 
              className="text-white hover:text-[#FBB343] transition-colors text-[16px] font-[Roboto]"
            >
              영화
            </a>
            <a 
              href="/lists" 
              className="text-white hover:text-[#FBB343] transition-colors text-[16px] font-[Roboto]"
            >
              리스트
            </a>
            <a 
              href="/events" 
              className="text-white hover:text-[#FBB343] transition-colors text-[16px] font-[Roboto]"
            >
              이벤트
            </a>
            <a 
              href="/community" 
              className="text-white hover:text-[#FBB343] transition-colors text-[16px] font-[Roboto]"
            >
              커뮤니티
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSearchDialogOpen(true)}
              className="p-2 text-white hover:text-[#FBB343] transition-colors text-[16px]"
            >
              <Search className="w-5 h-5" />
            </button>
            
            {user ? (
              // 로그인 상태
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2 text-white hover:text-[#FBB343] transition-colors text-[16px]">
                    <User className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#242a32] border-[#4e5968] text-white">
                  <DropdownMenuLabel className="text-[#4e5968] text-xs">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#4e5968]/30" />
                  <DropdownMenuItem className="hover:bg-[#4e5968]/20 cursor-pointer">
                    <Heart className="w-4 h-4 mr-2" />
                    내가 찜한 영화
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#4e5968]/20 cursor-pointer">
                    <User className="w-4 h-4 mr-2" />
                    내 리뷰
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#4e5968]/30" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="hover:bg-[#4e5968]/20 cursor-pointer text-red-400"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    로그아웃
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // 비로그인 상태
              <>
                <Button
                  variant="ghost"
                  onClick={() => openAuthDialog("login")}
                  className="text-white hover:text-[#FBB343] hover:bg-transparent"
                >
                  로그인
                </Button>
                <Button
                  onClick={() => openAuthDialog("signup")}
                  className="bg-[#FBB343] hover:bg-[#fbc05e] text-[#242A32]"
                >
                  회원가입
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>

    <AuthDialog
      open={authDialogOpen}
      onOpenChange={setAuthDialogOpen}
      mode={authMode}
    />
    
    <SearchDialog
      open={searchDialogOpen}
      onClose={() => setSearchDialogOpen(false)}
    />
    </>
  );
}