const vh = typeof window === "object" && window?.innerHeight;
export const styles_Modal = `
   body, main {
     height: 100vh;
     height: calc(var(${vh}px, 1vh) * 100);
     overflow: hidden;
   }

`;