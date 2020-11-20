import { FaMapMarkerAlt } from 'react-icons/fa'
import React from 'react'
import { Select } from 'antd';

const { Option } = Select

const NearMe = () => (
  <div className="flex items-center w-full h-full">
      <span className="inline-block">
        <FaMapMarkerAlt className="text-lg"/>
      </span>
    <div className="ml-2 font-IMB">
      พื้นที่ใกล้ฉัน
    </div>
  </div>
)

const DropdownProvince = ({ provinces }) => {
  return (
    <Select defaultValue={<NearMe />} className="w-full h-full p-0 m-0 text-center border-none" name="cars" >
      <Option value="volvo" className="border-none">
        <NearMe />
      </Option>
      <Option value="saab">
      <div className="flex items-center w-full h-full">
        <span className="inline-block">
          <svg width="20" height="30" viewBox="0 0 25 30" fill="none" style={{ marginRight: '6px' }}  >
            <path d="M9 22l-.371.335.371.411.371-.41L9 22zm0 0l.371.335h0l.002-.002.004-.005.016-.017a4.45 4.45 0 00.02-.023l.04-.045c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297C16.032 11.957 16.5 10.413 16.5 9c0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 001.5 9c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.449 4.298a46.985 46.985 0 003.521 4.563l.016.017.004.005.001.002h0L9 22zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
            <path d="M16 28l-.371.335.371.411.371-.41L16 28zm0 0l.371.335h0l.002-.002.004-.005.016-.017a3.037 3.037 0 00.06-.068c.053-.06.13-.147.227-.26a46.982 46.982 0 003.235-4.235c.884-1.31 1.776-2.797 2.448-4.297.669-1.494 1.137-3.037 1.137-4.451 0-4.146-3.354-7.5-7.5-7.5A7.495 7.495 0 008.5 15c0 1.414.468 2.957 1.137 4.45.672 1.5 1.564 2.988 2.448 4.298a46.982 46.982 0 003.522 4.563l.016.017.004.005.001.002h0L16 28zm0-11a2 2 0 110-4 2 2 0 010 4z" fill="#222" stroke="#fff"></path>
          </svg>
        </span>
        <div className="">
          <span className="font-IMB">สถานที่ทั้งหมด</span>
        </div>
      </div>
      </Option>
      {provinces !== undefined && provinces.map((data, i) => (
        <Option key={i} value={data}>
          <div className="flex items-center w-full h-full">
            <span className="font-IMB">
              {data}
            </span>
          </div>
        </Option>
      ))}
    </Select>
  )
}

export default DropdownProvince
