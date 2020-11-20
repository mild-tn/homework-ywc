import { Col, Input, Radio, Row } from "antd";
import React, { useContext } from 'react'

import DropdownProvince from './DropdownProvince'
import { StoreContext } from '../../features/HomePage/stores/homepageStore'
import { useObserver } from 'mobx-react-lite'

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

export default function Navbar({ categories }) {
  const context = useContext(StoreContext)
  return useObserver(() => (
	<>
    <div style={{ width: '22rem' }} className="fixed hidden w-64 border border-gray-500 rounded-sm font-IMB md:relative md:mr-8 md:block">
      <div className="p-4 bg-white">
        <div>
          <div style={{ letterSpacing: "-0.02em" }} className="mt-4 text-base font-semibold text-black first:mt-0 break-word">
            ประเภทร้านค้า
          </div>
          <div className="mt-4 first:mt-0">
            <Radio.Group onChange={(e) => context.setStoreType(e.target.value)} defaultValue={10}>
              <Radio style={radioStyle} value={10}>
                ทั้งหมด
              </Radio>
              {
                categories !== undefined && categories.map((data, i) => (
                  <Radio style={radioStyle} key={i} value={i}>
                    {data.name}
                  </Radio>
                ))
              }
            </Radio.Group>
          </div>
        </div>
        <div style={{ letterSpacing: "-0.02em" }} className="mt-8 text-base font-semibold text-black first:mt-0 break-word">จังหวัด/ใกล้ฉัน</div>
        <div className="w-full mt-2">
          <DropdownProvince provinces={context.data?.provinces}/>
        </div>

        <div style={{ letterSpacing: "-0.02em" }} className="mt-8 text-base font-semibold text-black first:mt-0 break-word">ช่วงราคาสินค้า (บาท)</div>
        <div className="site-input-group-wrapper">
        <Input.Group  size="medium">
          <Row className="justify-between w-full">
            <Col style={{ width: '45%' }} >
              <Input placeholder="ราคาต่ำสุด" />
            </Col>
              -
            <Col style={{ width: '45%' }} >
              <Input placeholder="ราคาสูงสุด" />
            </Col>
          </Row>
        </Input.Group>
        </div>
        <div style={{ letterSpacing: "-0.02em" }} className="mt-8 text-base font-semibold text-black first:mt-0 break-word">ประเภท</div>
        <div className="mt-4">
          <Radio.Group>
            { context.storeType == 10 ? 
              <Radio style={radioStyle} defaultChecked> ทั้งหมด </Radio> :
              categories !== undefined && 
              categories[context.storeType].subcategories.map((data, i) => (
                <Radio style={radioStyle} value={i} key={i}>
                  {data}
                </Radio>
              ))
            }
          </Radio.Group>
        </div>
      </div>
    </div>
	</>
  ));
}
