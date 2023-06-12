import { describe, expect, test, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

import usePostData from '../usePostData';
import { apiHelper } from '../../utils/helpers';

type MockRequestData = { value: string };
type MockResolvedData = Promise<{ value: string }>;
type MockRejectedData = Promise<{ error: string }>;
type MockAxiosRejectData = Promise<AxiosError>;

describe('usePostData', () => {
  test('should return not loading before postData is being called', async () => {
    const { result } = renderHook(() => usePostData());
    expect(result.current.isLoading).toBeFalsy();
  });

  test('should return no error before postData is being called', async () => {
    const { result } = renderHook(() => usePostData());
    expect(result.current.error).toBeNull();
  });

  test('should return a postData function to be called', async () => {
    const { result } = renderHook(() => usePostData());
    expect(result.current.postData).toBeInstanceOf(Function);
  });

  test('should return correct data after calling postData function and received a successful response', async () => {
    const data: MockRequestData = { value: 'request value' };
    const mockResolvedData: MockResolvedData = Promise.resolve({
      value: 'response value',
    });
    const url = 'testURL';
    const spyMockHelper = vi
      .spyOn(apiHelper, 'post')
      .mockReturnValue(mockResolvedData);
    const { result } = renderHook(() => usePostData());
    result.current.postData<MockRequestData, MockResolvedData>(url, data);
    expect(spyMockHelper).toHaveBeenCalledWith(url, data);
    expect(spyMockHelper).toHaveReturnedWith(mockResolvedData);
  });

  test('should return null after calling postData function and got an error response', async () => {
    const data: MockRequestData = { value: 'request value' };
    const mockRejectedData: MockRejectedData = Promise.reject({
      error: 'error message',
    });
    const url = 'testURL';
    const spyMockHelper = vi
      .spyOn(apiHelper, 'post')
      .mockReturnValue(mockRejectedData);
    const { result } = renderHook(() => usePostData());
    const responseData = await result.current.postData<
      MockRequestData,
      MockResolvedData
    >(url, data);
    expect(spyMockHelper).toHaveBeenCalledWith(url, data);
    expect(responseData).toBeNull();
  });

  test('should return correct error message from api after calling postData function and got an AxiosError', async () => {
    const data: MockRequestData = { value: 'request value' };
    const axiosError = new AxiosError('Something went wrong');
    axiosError.response = {
      data: 'axios error',
      status: 401,
      statusText: '',
      headers: {},
      config: {} as InternalAxiosRequestConfig,
    };
    const mockRejectedData: MockAxiosRejectData = Promise.reject(axiosError);
    const url = 'testURL';
    const spyMockHelper = vi
      .spyOn(apiHelper, 'post')
      .mockReturnValue(mockRejectedData);
    const { result } = renderHook(() => usePostData());
    await act(async () => {
      await result.current.postData<MockRequestData, MockResolvedData>(
        url,
        data,
      );
    });
    expect(spyMockHelper).toHaveBeenCalledWith(url, data);
    expect(result.current.error).toBe('axios error');
  });

  test('should return default error message after calling postData function and got an AxiosError without proper error message', async () => {
    const data: MockRequestData = { value: 'request value' };
    const axiosError = new AxiosError('Something went wrong');
    const mockRejectedData: MockAxiosRejectData = Promise.reject(axiosError);
    const url = 'testURL';
    const spyMockHelper = vi
      .spyOn(apiHelper, 'post')
      .mockReturnValue(mockRejectedData);
    const { result } = renderHook(() => usePostData());
    await act(async () => {
      await result.current.postData<MockRequestData, MockResolvedData>(
        url,
        data,
      );
    });
    expect(spyMockHelper).toHaveBeenCalledWith(url, data);
    expect(result.current.error).toBe('Something went wrong');
  });

  test('should return correct error message after calling postData function and got an error response', async () => {
    const data: MockRequestData = { value: 'request value' };
    const mockRejectedData: MockRejectedData = Promise.reject({
      error: 'error message',
    });
    const url = 'testURL';
    const spyMockHelper = vi
      .spyOn(apiHelper, 'post')
      .mockReturnValue(mockRejectedData);
    const { result } = renderHook(() => usePostData());
    await act(async () => {
      await result.current.postData<MockRequestData, MockResolvedData>(
        url,
        data,
      );
    });
    expect(spyMockHelper).toHaveBeenCalledWith(url, data);
    expect(result.current.error).toBe('Something went wrong');
  });

  test('should return is loading when postData function is being called and is still waiting for response', async () => {
    const data: MockRequestData = { value: 'request value' };
    const mockRejectedData: MockRejectedData = Promise.reject({
      error: 'error message',
    });
    const url = 'testURL';
    const spyMockHelper = vi
      .spyOn(apiHelper, 'post')
      .mockReturnValue(mockRejectedData);
    const { result } = renderHook(() => usePostData());
    act(() => {
      result.current.postData<MockRequestData, MockResolvedData>(url, data);
    });
    expect(spyMockHelper).toHaveBeenCalledWith(url, data);
    expect(result.current.isLoading).toBeTruthy();
  });

  test('should return is not loading when postData function is being called and is resolved or rejected', async () => {
    const data: MockRequestData = { value: 'request value' };
    const mockRejectedData: MockRejectedData = Promise.reject({
      error: 'error message',
    });
    const url = 'testURL';
    const spyMockHelper = vi
      .spyOn(apiHelper, 'post')
      .mockReturnValue(mockRejectedData);
    const { result } = renderHook(() => usePostData());
    await act(async () => {
      await result.current.postData<MockRequestData, MockResolvedData>(
        url,
        data,
      );
    });
    expect(spyMockHelper).toHaveBeenCalledWith(url, data);
    expect(result.current.isLoading).toBeFalsy();
  });
});
