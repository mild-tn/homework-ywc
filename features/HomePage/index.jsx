import React, { useCallback, useContext, useEffect, useMemo } from 'react'

import Card from '../../core/components/Card'
import Navbar from '../../core/components/Nevbar'
import SideBar from '../../core/components/SideMenu'
import { StoreContext } from './stores/homepageStore'
import { useObserver } from 'mobx-react-lite'

export default function Home() {
  const context = useContext(StoreContext)

  useEffect(async () => {
    await context.getData()
  }, [context])

  // const ref = useRef(context)

  return useObserver(() => (
    <div style={{ backgroundImage: 'url(/homework-ywc/images/result-bg.png)' }} className="min-h-screen bg-fixed bg-center bg-cover">
      <div className="bg-white">
        <div className="relative z-20 bg-white">
          <div
            className="flex items-center justify-between bg-white"
            style={{ maxWidth: '1280px', margin: '0px auto' }}
          >
            <Navbar provinces={context.data?.provinces}/>
          </div>
          <div className="bg-primary">
          <div className="z-10 flex justify-start px-4 py-3 overflow-x-auto md:px-8" style={{ maxWidth: '1280px', margin: '0px auto' }}>
            <div className="font-bold text-white underline whitespace-no-wrap false">
              <a href="/">หน้าแรก</a>
            </div>
            <div className="mx-3 text-gray-300">/</div>
            <div className="pr-8 text-white whitespace-no-wrap null">
              <div className="font-semibold">ค้นหา</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div style={{ maxWidth: '1600px' }} className="relative w-full mx-auto">
        <div className="mt-0">
          <div className="px-4 pt-0 pb-4 md:px-4 md:py-8">
            <div className="flex items-center justify-between mt-0 mb-8">
              <div className="flex-1">
                <div style={{ letterSpacing: "-0.02em" }} className="mt-0 mb-4 font-sans text-xl font-semibold font-IMB first:mt-0 break-word ">
                  ผลการค้นหาทั้งหมด
                </div>
              </div>
            </div>
            <div className="flex items-start ">
            <SideBar categories={context.data?.categories} />
            <div className="flex-1">
              <div className="flex-1">
                <dvi className="grid grid-cols-1 gap-2">
                  {
                    context.data !== undefined && context.data.merchants.map((data, i) => (
                      <Card key={i} merchants={data}/>
                    ))
                  }
                </dvi>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
