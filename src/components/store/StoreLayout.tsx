import { Outlet } from "react-router-dom";
import { TopBar } from "@/components/store/TopBar";
import { StoreHeader } from "@/components/store/StoreHeader";
import { StoreFooter } from "@/components/store/StoreFooter";

export function StoreLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <StoreHeader />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <StoreFooter />
    </div>
  );
}
