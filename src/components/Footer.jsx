import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="sb__footer p-16">
        <div className="sb__footer-links flex justify-between items-start flex-row flex-wrap w-full text-left mb-8">
          <div className="w-36 mb-4 flex flex-col text-white">
            <h4 className="text-sm leading-4 my-2 cursor-pointer">Empleados</h4>
            <a  className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Eduardo Gutierrez Pacheco</p>
            </a>
            <a  className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Jonathan Rafael Coox Carrillo</p>
            </a>
            <a  className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Alexis Alberto Zamora Gorospe</p>
            </a>
          </div>
          <div className="w-36 mb-4 flex flex-col text-white">
            <h4 className="text-sm leading-4 my-2 cursor-pointer">Resource</h4>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 4</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 5</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 6</p>
            </a>
          </div>
          <div className="w-36 mb-4 flex flex-col text-white">
            <h4 className="text-sm leading-4 my-2 cursor-pointer">Privacy Policy</h4>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 7</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 8</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 9</p>
            </a>
          </div>
          <div className="w-36 mb-4 flex flex-col text-white">
            <h4 className="text-sm leading-4 my-2 cursor-pointer">Terms & Conditions</h4>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 10</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 11</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs leading-4 my-2 cursor-pointer">Link 12</p>
            </a>
          </div>
          <div className="w-36 mb-4 flex flex-col text-white">
            <h4 className="text-sm leading-4 my-2 cursor-pointer">MovieCan</h4>
            <p className="text-xs leading-4 my-2 cursor-pointer">Cancun quintana roo 2023</p>
          </div>
        </div>
        <hr className="my-1" />
        <div className="sb__footer-below flex justify-between flex-row mt-1">
          <div className="sb__footer-copyright">
            <p className="text-gray-300 text-xs">Copyright © 2023. All rights reserved</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs">Privacy</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs">Terms & Conditions</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs">Security</p>
            </a>
            <a href="#" className="text-gray-300 no-underline">
              <p className="text-xs">Cookie Declaration</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
