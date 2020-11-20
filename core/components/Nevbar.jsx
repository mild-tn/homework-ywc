import { Dropdown, Select } from 'antd';

import { AiOutlineSearch } from 'react-icons/ai'
import DropdownProvince from './DropdownProvince';
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Navbar({ provinces }) {
  return (
	<>
    <div
			className="px-4 md:px-8"
			style={{ height: '60px', paddingTop: '10px', paddingBottom: '10px' }}
    >
			<a href="/">
				<img
					src="/images/halfhalf-logo.png"
					className="hidden md:block"
					style={{ height: '40px', width: 'auto' }}
				/>
				<img
					src="/images/halfhalf-logo-mini.png"
					className="block md:hidden"
					style={{ height: '40px', width: 'auto' }}
				/>
			</a>
    </div>
    <div className="flex items-center h-auto h-full ml-auto mr-4 overflow-hidden border rounded-lg above-the-fold-input md:mr-8" style={{ flex: '1 1 0%', boxShadow: 'black 0px 0px 1px' }} >
      <div className="hidden w-full h-10 sm:w-48 md:mt-0 md:block">
        <div className="w-full h-10 text-sm sm:w-48 md:h-10" style={{ borderRadius: '0px', border: '0px'}} id="antd-selector-search">
          <DropdownProvince provinces={provinces}/>
        </div>
      </div>
      <div className="relative flex w-full h-10 ml-2 border-transparent">
        <span
          style={{ backgroundColor: '#F5F5F5' }}
          className="absolute top-0 right-0 z-10 w-1/12 h-full p-3 leading-snug text-center bg-gray-400 rounded text-bar-code-icon text-primary-300"
        >
          <AiOutlineSearch className="ml-3 text-base text-gray-900" />
        </span>
        <input className="w-full h-full px-3 py-2 overflow-hidden leading-tight text-gray-700 border-none shadow appearance-none focus:outline-none focus:shadow-outline" type="text" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"/>
      </div>
    </div>
	</>
  );
}
