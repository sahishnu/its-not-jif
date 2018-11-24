export function getPathParams (pathname) {
  pathname = pathname.split('');
  if (pathname[0] === '/') pathname.shift();
  if (pathname[1] === '/') pathname.pop();
  pathname = pathname.join('');
  return pathname.split('/');
}