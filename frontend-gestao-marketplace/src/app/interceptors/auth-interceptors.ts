import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
// 🔐 Interceptor que adiciona o token JWT ao cabeçalho Authorization em cada requisição, se o usuário estiver autenticado.
import { UserAuthService } from '../services/user-auth';

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const _userAuthService = inject(UserAuthService);

  const HAS_TOKEN = _userAuthService.getUserToken();
  if (HAS_TOKEN) {
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${HAS_TOKEN}`),
    });

    return next(newReq);
  }

  return next(req);
};
