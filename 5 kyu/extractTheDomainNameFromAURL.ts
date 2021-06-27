export const domainName = (url: string) => {

  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
      
      
}