import * as React from 'react';
import { TParams } from '../types';

const ForgotPasswordEmail = ({
    params
  }:{
    params: TParams;
    
  }) => {
  return (
    <div className="bg-white p-0 m-0 w-full h-full">
    <div className="hidden text-transparent leading-none max-h-0 max-w-0 opacity-0 overflow-hidden"></div>
    <table className="w-full">
      <tbody>
        <tr>
          <td className="bg-white text-center p-10 md:px-15 md:pb-30">
            <table className="w-full max-w-lg mx-auto">
              <tbody>
                <tr>
                  <td>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="p-0 text-base leading-6 text-gray-900">
                            <h2 className="text-2xl mb-4">Password recovery</h2>
                            <p className="mb-4">Olá, {params.name}</p>
                            <p className="mb-4">
                             We received a request to redefine your account password.If you have not requested this change, please ignore this email.Otherwise, click the button below to redefine your password:
                            </p>
                            <a
                              href={params.url}
                              className="inline-block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                              style={{ textDecoration: 'none' }}
                            >
                             Redefine password
                            </a>
                            <p className="mt-4">
                             If the above button does not work, copy and paste the following link to your browser:
                              <p>{params.url}</p>
                            </p>
                            <p className="break-words text-blue-600"></p>
                            <p className="mt-4">
                            Best regards<br />
                              
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default ForgotPasswordEmail;
