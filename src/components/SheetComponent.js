import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ChatSection from './ChatSection'

function SheetComponent({open, setOpen}) {
  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={setOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xl">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none "
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      X
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex h-full flex-col overflow-y-scroll bg-white  shadow-xl">
                  <div className="px-2 sm:px-3 sticky top-0 bg-white p-4 z-10 border-b-2">
                    <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                      Chat Bot
                    </Dialog.Title>
                  </div>
                  <div className="relative mt-6 flex-1 "><ChatSection/></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  )
}

export default SheetComponent