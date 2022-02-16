/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateUserDto } from '../models/create-user-dto';
import { UpdateUserDto } from '../models/update-user-dto';
import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserGet
   */
  static readonly ApiUserGetPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Plain(params?: {
  }): Observable<Array<UserDto>> {

    return this.apiUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<UserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGet$Json(params?: {
  }): Observable<Array<UserDto>> {

    return this.apiUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>) => r.body as Array<UserDto>)
    );
  }

  /**
   * Path part for operation apiUserPost
   */
  static readonly ApiUserPostPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Response(params?: {
    body?: CreateUserDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost(params?: {
    body?: CreateUserDto
  }): Observable<void> {

    return this.apiUserPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserIdGet
   */
  static readonly ApiUserIdGetPath = '/api/User/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Plain(params: {
    id: string;
  }): Observable<UserDto> {

    return this.apiUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdGet$Json(params: {
    id: string;
  }): Observable<UserDto> {

    return this.apiUserIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

  /**
   * Path part for operation apiUserIdPut
   */
  static readonly ApiUserIdPutPath = '/api/User/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserIdPut$Response(params: {
    id: string;
    body?: UpdateUserDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserIdPut(params: {
    id: string;
    body?: UpdateUserDto
  }): Observable<void> {

    return this.apiUserIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserIdDelete
   */
  static readonly ApiUserIdDeletePath = '/api/User/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserIdDelete(params: {
    id: string;
  }): Observable<void> {

    return this.apiUserIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
