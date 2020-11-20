import React from 'react'

const showPriceLevel = (priceLevel) => {
  let sum = '$'
  for (let index = 0; index < priceLevel; index++) {
    sum += sum
  }
  return sum
}

const Card = ({ merchants }) => {
  return (
    <div className="bg-white border lg:flex font-IMB">
      <div className="p-2">
        <div className="bg-cover lg:max-w-xs" style={{ minHeight: '14rem', width: '250px', backgroundImage: `url(${merchants.coverImageId})`}} />
      </div>
      <div className="flex-1 p-4">
        <div className="text-xl font-semibold text-black">
          <div className="flex justify-between">
            <div className="flex items-center">
              {merchants.shopNameTH}
              {
                merchants.isOpen === "Y" ? 
                <span className="ml-4 ant-tag ant-tag-has-color" style={{ backgroundColor: 'rgb(27, 195, 0)' }}>
                  เปิดอยู่
                </span>
                :''
              }
            </div>
          <div>
        </div>
      </div>
      </div>
        <div className="flex flex-wrap font-sm" style={{ color: 'rgb(153, 153, 153)' }}>
          <div>{merchants.subcategoryName}</div>
          <div>
            <span className="mx-3">|</span>
            {showPriceLevel(merchants.priceLevel)}
          </div>
          <div className="mx-3">|</div>
          <div>
            {merchants.addressDistrictName} {merchants.addressProvinceName}
          </div>
        </div>
        <hr className="my-6"/>
          {
            merchants.recommendedItems.map((data,i) => (
              <span className="mr-2" key={i}>
                {data}
              </span>
            )
          )}
          <div>
            เมนูแนะนำ:
            <span  dangerouslySetInnerHTML={{ __html: merchants.highlightText || '' }}>
            </span>
          </div>
      </div>
    </div>
  )
}

export default Card