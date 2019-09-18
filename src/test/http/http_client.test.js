jest.mock('node-fetch');

import fetch from 'node-fetch';
import { HttpClient } from '../../lib/http/http_client';
import { AuthenticationException } from '../../lib/exceptions/authentication_exception';
import { ResourceNotFoundException } from '../../lib/exceptions/notfound/resource_not_found_exception';
import { ResourceAccessDeniedException } from '../../lib/exceptions/accessdenied/resource_access_denied_exception';

const {Response} = jest.requireActual('node-fetch');

describe("HttpClient tests:", () => {

    let http_client = new HttpClient();
    beforeEach(() => fetch.mockClear());

    test("Test for HttpClient.hadleresponse(:Response) missing authentication", () => {
        fetch.mockResolvedValue(new Response({}, {status: 401}));
        http_client.get("https://someurl.com").catch(error => expect(error).toBe(AuthenticationException.missing()));
    })

    it("Test for HttpClient.hadleresponse(:Response) invalid authentication", () => {
        fetch.mockResolvedValue(new Response({}, {status: 401}));
        http_client.authenticate("Authenticated").get("https://someurl.com").catch(error => expect(error).toBe(AuthenticationException.invalid()));
    })
    
    it("Test for HttpClient.hadleresponse(:Response) forbidden error thrown", () => {
        fetch.mockResolvedValue(new Response({}, {status: 403}));
        http_client.authenticate("Authenticated").get("https://someurl.com").catch(error => expect(error).toBe(new ResourceAccessDeniedException("Access denied for a resource.")));
    })

    it("Test for HttpClient.hadleresponse(:Response) not found error thrown", () => {
        fetch.mockResolvedValue(new Response({}, {status: 404}));
        http_client.authenticate("Authenticated").get("https://someurl.com").catch(error => expect(error).toBe(new ResourceNotFoundException("Access denied for a resource.")));
    })
})