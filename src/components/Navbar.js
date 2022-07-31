import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '../images/Asshr.png'
import Modal from 'react-modal'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const [openContact, setOpenContact] = useState(false)

  const closeModal = () => {
    setOpenContact(false)
  }

  return (
    <nav className='w-full fixed top-0 z-10 py-1 bg-darkblueish'>
      <div className='container mx-auto py-2 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={logo} className="w-8" alt='logo' />
          <span className='text-xl text-white font-bold'>Asshr.</span>
        </div>
        <ul className='hidden md:flex space-x-16 font-bold text-md text-white'>
          <li className='hover:text-gray-500'>
            <a href='#home'>Home</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#aboutme'>About Me</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#works'>Works</a>
          </li>
        </ul>
        <button
          className='openModalBtn hidden md:block py-1 px-4 font-bold border-2 rounded-xl text-lg text-white bg-red hover:bg-white hover:text-red duration-300 hover:scale-110'
          onClick={() => setOpenContact(true)}>
          Contact
        </button>
        <Modal
          isOpen={openContact}
          ariaHideApp={false}
          onRequestClose={closeModal}
          className='h-96'
        >
          <div class="flex w-full min-h-screen justify-center items-center">
            <div class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-red w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
              <div class="flex flex-col space-y-8 justify-between w-full">
                <div className='flex justify-end'>
                  <button onClick={closeModal} className='p-3 bg-red text-white border-2 rounded-xl'>X</button>
                </div>
                <div>
                  <h1 class="font-bold text-4xl tracking-wide">Let's get in touch.</h1>
                  <p class="pt-2 text-indigo-100 text-sm">For any enquiries, feel free to contact me!</p>
                </div>
                <div class="flex flex-col space-y-6">
                  <div class="inline-flex space-x-2 items-center w-60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>+62 8788 7687 017</span>
                  </div>
                  <div class="inline-flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>dev.ashardianto@gmail.com</span>
                  </div>
                  <div class="inline-flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>Pertanian 3 No. 42, Pasar Minggu, Jakarta Selatan, DKI Jakarta</span>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <a href="https://www.linkedin.com/in/ashar-ardianto-247489193/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://www.facebook.com/ardianto.ashar?locale2=sw_KE">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/ashardianto/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Modal>
        {/* <svg aria-hidden="true" focusable="false" className="hidden md:block w-5 h-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
        </svg> */}
        <Menu as="div" className="md:hidden relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Menu
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#home"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-center'
                      )}
                    >
                      Home
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#profile"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-center'
                      )}
                    >
                      About Me
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#skills"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-center'
                      )}
                    >
                      Skills
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#skills"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm text-center'
                      )}
                    >
                      Contact
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar
