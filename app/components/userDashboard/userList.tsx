import React from "react";
import Image from "next/image";
const UserList = () => {
  return (
    <div>
      <div className="mb-6"></div>
      <div className="font-semibold font-[Open Sans]">List Users</div>
      <div className="mb-6"></div>
      <table className="w-full">
        <thead className="mb-1 text-left">
          <tr>
            <th className="text-gray-400 text-sm font-[Open Sans] font-normal">
              Name
            </th>
            <th className="text-gray-400 text-sm font-[Open Sans] font-normal">
              Create Date
            </th>
            <th className="text-gray-400 text-sm font-[Open Sans] font-normal">
              Role
            </th>
            <th className="text-gray-400 text-sm font-[Open Sans] font-normal">
              Action
            </th>
          </tr>
        </thead>
        <div className="mb-6"></div>
        <tbody>
          <tr className="align-middle">
            <td className="">
              <div className="mb-4">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="text-sm">David Wagner</div>
                    <div className="text-xs text-neutral-400">
                      david_wagner@example.com
                    </div>
                  </div>
                  <div className=" text-white w-[120px] h-7 bg-blue-500 rounded-lg font-[Open Sans] text-sm flex items-center justify-center">
                    Super Admin
                  </div>
                </div>
              </div>
            </td>

            <td className="text-xs pb-4">24 Oct, 2015</td>
            <td className="text-xs pb-4">Lorem Ipsum</td>
            <td className="space-x-3 pb-4">
              <button>
                <Image
                  src="/icons/pencil.svg"
                  alt="pencil"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <button>
                <Image
                  src="/icons/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td>
              <div className="flex items-center h-full px-6 mb-4">
                <div className="flex flex-col">
                  <div className="text-sm">David Wagner</div>
                  <div className="text-xs text-neutral-400">
                    david_wagner@example.com
                  </div>
                </div>
                <div className="ml-auto text-white w-[120px] h-7 bg-blue-500 rounded-lg font-[Open Sans] text-sm flex items-center justify-center">
                  Super Admin
                </div>
              </div>
            </td>
            <td className="text-xs pb-4">24 Oct, 2015</td>
            <td className="text-xs pb-4">Lorem Ipsum</td>
            <td className="space-x-3 pb-4">
              <button>
                <Image
                  src="/icons/pencil.svg"
                  alt="pencil"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <button>
                <Image
                  src="/icons/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td>
              <div className="flex items-center h-full px-6 mb-4">
                <div className="flex flex-col">
                  <div className="text-sm">David Wagner</div>
                  <div className="text-xs text-neutral-400">
                    david_wagner@example.com
                  </div>
                </div>
                <div className="ml-auto text-white w-[120px] h-7 bg-blue-500 rounded-lg font-[Open Sans] text-sm flex items-center justify-center">
                  Super Admin
                </div>
              </div>
            </td>
            <td className="text-xs pb-4">24 Oct, 2015</td>
            <td className="text-xs pb-4">Lorem Ipsum</td>
            <td className="space-x-3 pb-4">
              <button>
                <Image
                  src="/icons/pencil.svg"
                  alt="pencil"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <button>
                <Image
                  src="/icons/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td>
              <div className="flex items-center h-full px-6 mb-4">
                <div className="flex flex-col">
                  <div className="text-sm">David Wagner</div>
                  <div className="text-xs text-neutral-400">
                    david_wagner@example.com
                  </div>
                </div>
                <div className="ml-auto text-white w-[120px] h-7 bg-blue-500 rounded-lg font-[Open Sans] text-sm flex items-center justify-center">
                  Super Admin
                </div>
              </div>
            </td>
            <td className="text-xs pb-4">24 Oct, 2015</td>
            <td className="text-xs pb-4">Lorem Ipsum</td>
            <td className="space-x-3 pb-4">
              <button>
                <Image
                  src="/icons/pencil.svg"
                  alt="pencil"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <button>
                <Image
                  src="/icons/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td>
              <div className="flex items-center h-full px-6 mb-4">
                <div className="flex flex-col">
                  <div className="text-sm">David Wagner</div>
                  <div className="text-xs text-neutral-400">
                    david_wagner@example.com
                  </div>
                </div>
                <div className="ml-auto text-white w-[120px] h-7 bg-blue-500 rounded-lg font-[Open Sans] text-sm flex items-center justify-center">
                  Super Admin
                </div>
              </div>
            </td>
            <td className="text-xs pb-4">24 Oct, 2015</td>
            <td className="text-xs pb-4">Lorem Ipsum</td>
            <td className="space-x-3 pb-4">
              <button>
                <Image
                  src="/icons/pencil.svg"
                  alt="pencil"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <button>
                <Image
                  src="/icons/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td>
              <div className="flex items-center h-full px-6 mb-4">
                <div className="flex flex-col">
                  <div className="text-sm">David Wagner</div>
                  <div className="text-xs text-neutral-400">
                    david_wagner@example.com
                  </div>
                </div>
                <div className="ml-auto text-white w-[120px] h-7 bg-blue-500 rounded-lg font-[Open Sans] text-sm flex items-center justify-center">
                  Super Admin
                </div>
              </div>
            </td>
            <td className="text-xs pb-4">24 Oct, 2015</td>
            <td className="text-xs pb-4">Lorem Ipsum</td>
            <td className="space-x-3 pb-4">
              <button>
                <Image
                  src="/icons/pencil.svg"
                  alt="pencil"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <button>
                <Image
                  src="/icons/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </td>
          </tr>
          <tr className="align-middle">
            <td>
              <div className="flex items-center h-full px-6 mb-4">
                <div className="flex flex-col">
                  <div className="text-sm">David Wagner</div>
                  <div className="text-xs text-neutral-400">
                    david_wagner@example.com
                  </div>
                </div>
                <div className="ml-auto text-white w-[120px] h-7 bg-blue-500 rounded-lg font-[Open Sans] text-sm flex items-center justify-center">
                  Super Admin
                </div>
              </div>
            </td>
            <td className="text-xs pb-4">24 Oct, 2015</td>
            <td className="text-xs pb-4">Lorem Ipsum</td>
            <td className="space-x-3 pb-4">
              <button>
                <Image
                  src="/icons/pencil.svg"
                  alt="pencil"
                  width={20}
                  height={20}
                ></Image>
              </button>
              <button>
                <Image
                  src="/icons/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
