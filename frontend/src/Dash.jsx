import React from "react";
import { Link } from "react-router-dom";
const Dash = () => {
  return (
    <>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Age</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold text-black">Alex</p>
                        <p className="text-xs text-gray-600">Developer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ms font-semibold border">22</td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Acceptable{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border">6/4/2000</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold text-black">Stevens</p>
                        <p className="text-xs text-gray-600">Programmer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-md font-semibold border">27</td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                      {" "}
                      Pending{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border">6/10/2020</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Nora</p>
                        <p className="text-xs text-gray-600">Designer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-md font-semibold border">17</td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                      {" "}
                      Notacceptable{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border">6/10/2020</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Michele</p>
                        <p className="text-xs text-gray-600">Programmer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold">23</td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Acceptable{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Dell</p>
                        <p className="text-xs text-gray-600">Designer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold">20</td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">
                      {" "}
                      Pending{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">John</p>
                        <p className="text-xs text-gray-600">Pen Tester</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold">29</td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Acceptable{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1496360166961-10a51d5f367a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Levi</p>
                        <p className="text-xs text-gray-600">Web Designer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold">38</td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Acceptable{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Virat</p>
                        <p className="text-xs text-gray-600">Data</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold">19</td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Acceptable{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-10 h-10 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Boat</p>
                        <p className="text-xs text-gray-600">Developer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold">21</td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      Acceptable{" "}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-sm">6/10/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Link
          to="/"
          className="p-4 rounded-lg bg-teal-300 text-blue-900 text-xl cursor-pointer hover:bg-blue-900 hover:text-teal-300 focus:outline-none"
        >
          Home
        </Link>
      </section>
    </>
  );
};

export default Dash;
