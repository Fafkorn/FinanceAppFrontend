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

import { CreateExpenseCategoryDto } from '../models/create-expense-category-dto';
import { ExpenseCategoryDto } from '../models/expense-category-dto';
import { UpdateExpenseCategoryDto } from '../models/update-expense-category-dto';

@Injectable({
  providedIn: 'root',
})
export class ExpenseCategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiExpenseCategoryGet
   */
  static readonly ApiExpenseCategoryGetPath = '/api/ExpenseCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ExpenseCategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseCategoryService.ApiExpenseCategoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExpenseCategoryDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExpenseCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryGet$Plain(params?: {
  }): Observable<Array<ExpenseCategoryDto>> {

    return this.apiExpenseCategoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ExpenseCategoryDto>>) => r.body as Array<ExpenseCategoryDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ExpenseCategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseCategoryService.ApiExpenseCategoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExpenseCategoryDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExpenseCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryGet$Json(params?: {
  }): Observable<Array<ExpenseCategoryDto>> {

    return this.apiExpenseCategoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ExpenseCategoryDto>>) => r.body as Array<ExpenseCategoryDto>)
    );
  }

  /**
   * Path part for operation apiExpenseCategoryPost
   */
  static readonly ApiExpenseCategoryPostPath = '/api/ExpenseCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseCategoryPost$Response(params?: {
    body?: CreateExpenseCategoryDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseCategoryService.ApiExpenseCategoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiExpenseCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseCategoryPost(params?: {
    body?: CreateExpenseCategoryDto
  }): Observable<void> {

    return this.apiExpenseCategoryPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExpenseCategoryIdGet
   */
  static readonly ApiExpenseCategoryIdGetPath = '/api/ExpenseCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseCategoryIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ExpenseCategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseCategoryService.ApiExpenseCategoryIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExpenseCategoryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExpenseCategoryIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryIdGet$Plain(params: {
    id: string;
  }): Observable<ExpenseCategoryDto> {

    return this.apiExpenseCategoryIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ExpenseCategoryDto>) => r.body as ExpenseCategoryDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseCategoryIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<ExpenseCategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseCategoryService.ApiExpenseCategoryIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExpenseCategoryDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExpenseCategoryIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryIdGet$Json(params: {
    id: string;
  }): Observable<ExpenseCategoryDto> {

    return this.apiExpenseCategoryIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ExpenseCategoryDto>) => r.body as ExpenseCategoryDto)
    );
  }

  /**
   * Path part for operation apiExpenseCategoryIdPut
   */
  static readonly ApiExpenseCategoryIdPutPath = '/api/ExpenseCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseCategoryIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseCategoryIdPut$Response(params: {
    id: string;
    body?: UpdateExpenseCategoryDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseCategoryService.ApiExpenseCategoryIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiExpenseCategoryIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseCategoryIdPut(params: {
    id: string;
    body?: UpdateExpenseCategoryDto
  }): Observable<void> {

    return this.apiExpenseCategoryIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExpenseCategoryIdDelete
   */
  static readonly ApiExpenseCategoryIdDeletePath = '/api/ExpenseCategory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseCategoryIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseCategoryService.ApiExpenseCategoryIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiExpenseCategoryIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseCategoryIdDelete(params: {
    id: string;
  }): Observable<void> {

    return this.apiExpenseCategoryIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
