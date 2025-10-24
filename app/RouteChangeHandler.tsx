"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SimpleLoading from "@/components/spinner/SimpleLoading";

export default function RouteChangeHandler() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  useEffect(() => {
    const originalPush = router.push;
    const originalReplace = router.replace;
    const originalBack = router.back;

    const startLoading = (target?: string | URL) => {
      if (typeof target === "string") {
        const targetPath = target.split('#')[0];
        const currentPath = pathname;
        
        if (targetPath !== currentPath) {
          // Different page navigation
          setIsLoading(true);
        }
        // Same page hash navigation - don't show loader
      } else {
        setIsLoading(true);
      }
    };

    router.push = (...args) => {
      startLoading(args[0]);
      return originalPush.apply(router, args);
    };

    router.replace = (...args) => {
      startLoading(args[0]);
      return originalReplace.apply(router, args);
    };

    router.back = () => {
      startLoading();
      return originalBack.apply(router);
    };

    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
      router.back = originalBack;
    };
  }, [router, pathname]);

  if (isLoading) {
    return <SimpleLoading />;
  }

  return null;
}
