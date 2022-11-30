export const styles_Modal = `
   body, main {
     height: 100vh;
     overflow: hidden;
   }
   @supports(height: 1svh) {
       body {
        height: 100svh;
        overflow: hidden;
     }
   @supports(height: 1lvh) {
       body {
        height: 100lvh;
        overflow: hidden;
     }  
   }
`;