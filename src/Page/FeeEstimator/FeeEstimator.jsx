import { FaCalculator, FaCross } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/d5fa3e615adcdf6c849cf24fd6b9ab900ed20767.png'







const FeeEstimator = () => {
  const [estimatorData, setEstimatorData] = useState([])
  // const [departmentData, setDepartmentData] = useState([])

  useEffect( () => {
    fetch('feeEstimatorData.json')
    .then(res => res.json())
    .then(data => setEstimatorData(data))
  } ,[] )
  console.log(estimatorData)
  const divisionSelect = estimatorData.map(item => item.Department )
  console.log(divisionSelect)

  

//   const departmentItems = estimatorData.map((division) => {
//     return division.Department.map((department) => {
//         return department.Department;
//     });
// });

// console.log(departmentItems);

  
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
      } = useForm();
      // let formData= {}
      const onSubmit = (data) => {
        // Handle form submission here
        // You should add your logic for creating a user and processing the form data
        const pacageDiamension = parseInt(data.Dimension1 ) * parseInt(data.Dimension2) * parseInt(data.Dimension3) 
        console.log(pacageDiamension)
        // formData = {pacageDiamension: parseInt(pacageDiamension), sellingPrice: parseInt(data.sellingPrice), costOfProduct: parseFloat(data.costOfProduct), divisionSelect: data.divisionSelect, departmentSelect: data.departmentSelect, categorySelect: data.categorySelect, unitWeight: data.unitWeight}
        // console.log(formData);

        const sellingPrice = parseInt(data.sellingPrice)
        const successFees = sellingPrice / pacageDiamension * 100
        console.log(successFees)
    
        // Reset the form
        // reset();
    
      };

      const showCalculateData = () => {

      }

  return (
    <div className="">

      <div className="bg-white py-4 w-full lg:flex px-2">
        <Link to="/">
          <img className="lg:w-28 w-20" src={logo} alt="" />
        </Link>
        <div className="lg:ps-[500px]">
          <h1 className="text-lg flex items-center gap-2 font-semibold">
            <FaCalculator /> FeeEstimator
          </h1>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row mt-3">
        <div className="bg-white px-3 py-3 hover:shadow-xl lg:w-[35%] m-2 rounded">
          <h1 className="text-2xl font-semibold mb-3">Estimate Takealot Fees</h1>
          <p className="text-xs pb-[200px]">
            Use the Fee Estimator to estimate the Takealot Fees you will be
            charged on a sale, allowing you to have more visibility and
            transparency when it comes to guaranteed fees charged. <br /> <br /> Please note
            that the Fee Estimator provides an estimate and does not include
            subscription fees, storage fees or any other fees that can be
            avoided and are not guaranteed to be applied to the sale of a
            product. <br /> <br /> For more information on how to use the Fee Estimator, click
            <Link className="text-blue-400"> here</Link> or view the Takealot <Link className="text-blue-400">pricing schedule</Link> for information on fees.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}  className="bg-white mx-10 px-3 py-4 hover:shadow-xl rounded">

            {/* pacage dmensions */}
          <div className="flex gap-2 ">
            <p className="flex text-xs gap-2 items-center">
              Package Dimensions<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="lg:ms-5">
              <input
              {...register("Dimension1")}
              name="Dimension1"
                className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 "border-red-500" focus:bg-blue-100 focus:border-blue-200 ${
                    errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
              {errors && (
                <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
              )}
            </div>
            <span className="-ms-24 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="30"
                viewBox="0 0 100 100"
              >
                <line
                  x1="20"
                  y1="20"
                  x2="80"
                  y2="80"
                  stroke="#000"
                  stroke-width="15"
                />
                <line
                  x1="20"
                  y1="80"
                  x2="80"
                  y2="20"
                  stroke="#000"
                  stroke-width="15"
                />
              </svg>
            </span>
            <div className="">
              <input
              {...register("Dimension2")}
              name="Dimension2"
                className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
            </div>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="30"
                viewBox="0 0 100 100"
              >
                <line
                  x1="20"
                  y1="20"
                  x2="80"
                  y2="80"
                  stroke="#000"
                  stroke-width="15"
                />
                <line
                  x1="20"
                  y1="80"
                  x2="80"
                  y2="20"
                  stroke="#000"
                  stroke-width="15"
                />
              </svg>
            </span>
            <div className="">
              <input
                {...register("Dimension3")}
                name="Dimension3"
                className={`border w-[80px] rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
            </div>
             <p className="text-xs mt-2">Cm</p>   
              

          </div>
          <div>

          </div>


          {/* Unit weight */}
      <div className="flex gap-2 mt-2">
        <p className="flex text-xs gap-2 items-center">
          Unit Weight
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="10 10 100 100">
              <circle cx="50" cy="50" r="40" fill="black" />
              <text x="40" y="70" font-family="italic" font-size="60" fill="white">
                i
              </text>
            </svg>
          </span>
        </p>

        <div className="flex gap-10 ms-20 text-xs">
          <label htmlFor='unitWeight'>
            <div>
              <Controller
                name="unitWeight"
                value="{'<='}7Kg"
                control={control}
                defaultValue=""
                render={({ field }) => 
                <input type="radio" {...field} className="radio" />}
              />
              {"<="}7Kg <br />
            </div>
            <div>
              <Controller
                name="unitWeight"
                value="25.1kg - 39.9kg"
                control={control}
                defaultValue=""
                render={({ field }) => <input type="radio" {...field} className="radio" />}
              />
              25.1kg - 39.9kg
            </div>
          </label>
          <div>
            <div>
              <Controller
                name="unitWeight"
                value="7.1Kg - 25kg"
                control={control}
                defaultValue=""
                render={({ field }) => <input type="radio" {...field} className="radio" />}
              />
              7.1Kg - 25kg <br />
            </div>
            <div>
              <Controller
                name="unitWeight"
                value="40kg - 70kg"
                control={control}
                defaultValue=""
                render={({ field }) => <input type="radio" {...field} className="radio" />}
              />
              40kg - 70kg
            </div>
          </div>
        </div>


        
      </div>
          


        {/* Division */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Division<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="ms-[90px]">
      <select 
      {...register("divisionSelect")}
      name="divisionSelect"
        className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      >
        {estimatorData.map((item, index) => <option value={index}>{item.Division}</option>)}
        {/* <option>{divisionData.Division}</option> */}
        {/* <option value="Consumer Electronics">Consumer Electronics</option>
        <option value="Home">Home</option>
        <option value="Personal & Lifestyle">Personal & Lifestyle</option>
        <option value="Family">Family</option>
        <option value="Consumables">Consumables</option>
        <option value="Media">Media</option>
        <option value="Office & Business">Office & Business</option> */}
      </select>
    </div>              
          </div>


        {/* Depertment */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Department<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="ms-[70px]">
      <select
      {...register("departmentSelect")}
      name="departmentSelect"
        className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      >
        {/* {estimatorData.map((division, index) => division.map(department => console.log(department.Department)))} */}
        {/* <option value="">{categoryList.filter(item => item.category)}</option> */}
        {/* <option value="Smart Home & Connected Living">Smart Home & Connected Living</option>
        <option value="Electronic Accessories">Electronic Accessories</option>
        <option value="Cameras">Cameras</option>
        <option value="Gaming">Gaming</option>
        <option value="Computers & Laptops">Computers & Laptops</option>
        <option value="Computer Components">Computer Components</option>
        <option value="Musical Instruments">Musical Instruments</option>
        <option value="TV & Audio">TV & Audio</option>
        <option value="Mobile">Mobile</option> */}
      </select>
    </div>              
          </div>



        {/* Category */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Category<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}
            
            
            <div className="ms-[85px]">
      <select
        {...register("categorySelect")}
        name="categorySelect"
        className="text-xs w-80 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
      >
        {/* <option value="">Pick One</option> */}
        <option value="option1">Stethoscopes → Stethoscopes</option>
        <option value="option2">Smoking Alternatives & Electronic Cigarettes → Hookah Pipes</option>
        <option value="option3">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Accessories</option>
        <option value="option4">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Coals</option>
        <option value="option6">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Coil Wires, Wicks & Cotton</option>
        <option value="option7">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Replacement Pipes</option>
        <option value="option8">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Storage & Cases</option>
        <option value="option9">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Tips</option>
        <option value="option10">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Accessories → Tongs</option>
        <option value="option11">moking Alternatives & Electronic Cigarettes → Smoking Alternative Devices</option>
        <option value="option12">Smoking Alternatives & Electronic Cigarettes → Smoking Alternative Refills</option>
        <option value="option13">Smoking Alternatives & Electronic Cigarettes → Vaping Devices</option>
        <option value="option14">Smoking Alternatives & Electronic Cigarettes → Vaping Refills</option>
        <option value="option15">Health Care → Adult Nappies</option>
        <option value="option16">Health Care → Biometric Monitors → Blood Glucose Meters</option>
        <option value="option17">Health Care → Biometric Monitors → Blood Pressure Monitors</option>
        <option value="option18">Health Care → Biometric Monitors → Body Weight Scales</option>
        <option value="option19">Health Care → Biometric Monitors → Medical Thermometers</option>
        <option value="option20">Health Care → Biometric Monitors → Pulse Oximeters</option>
        <option value="option21">Health Care → Coffins</option>
        <option value="option22">Health Care → DNA Ancestry Tests</option>
        <option value="option23">Health Care → Ear Devices</option>
        <option value="option24">Health Care → First Aid → Antiseptics & Cleaning Supplies</option>
        <option value="option25">Health Care → First Aid → Burns & Blisters</option>
        <option value="option26">Health Care → First Aid → Cotton Wool & Swabs</option>
        <option value="option27">Health Care → First Aid → Equipment</option>
        <option value="option28"></option>
        <option value="option29"></option>
        <option value="option30"></option>
        <option value="option31"></option>
        <option value="option32"></option>
        <option value="option33"></option>
      </select>
    </div>
              

          </div>




           {/* Sellings Price */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Selling Price<span className="text-red-400"> * </span>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}

            
            
            <div className="ms-[70px]">
               <div className="flex">
               {/* <div className="bg-slate-400 px-3 rounded-r-none rounded-md">R</div> */}
               <div className={`border border-r-1 rounded-r-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}>R</div>
            <input
                {...register("sellingPrice")}
                name="sellingPrice"
                defaultValue='0'
                className={`border w-[280px] border-s-0 rounded-s-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
               </div>
              {errors && (
                <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
              )}
    </div>              
          </div>




           {/* Cost of Product */}
        <div className="flex gap-2 mt-2">
            <p className="flex text-xs gap-2 items-center">
              Cost of Product
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="30"
                viewBox="10 10 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="black" />
                <text
                  x="40"
                  y="70"
                  font-family="italic"
                  font-size="60"
                  fill="white"
                >
                  i
                </text>
              </svg>
            </span>
            </p>{" "}

            
            
            <div className="ms-[66px]">
               <div className="flex">
               {/* <div className="bg-slate-400 px-3 rounded-r-none rounded-md">R</div> */}
               <div className={`border border-r-1 rounded-r-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}>R</div>
            <input
                {...register("costOfProduct")}
                name="costOfProduct"
                defaultValue='0.00'
                className={`border w-[280px] border-s-0 rounded-s-none rounded-md py-1 px-3 outline-none focus:bg-blue-100 focus:border-blue-200 ${
                  errors ? "border-red-500" : ""
                }`}
                type="text"
                placeholder=""
                
              />
               </div>
              {errors && (
                <p className="text-red-500 text-xs mt-1"><span>Package dimensions are required.</span></p>
              )}
    </div>              
          </div>

          <div className="flex justify-between mt-2">
            <p className="text-xs">Required <span className="text-red-500">*</span></p>
            <div>

               <button  className="px-4 py-2 bg-primary rounded text-white font-semibold text-xs">Calculate</button>
                

            </div>
          </div>
         




        </form>


      </div>
      <div className="text-right">
                <button className=" -rotate-90  -mr-6 bg-blue-600 px-4 py-2 rounded text-white text-xs">Calculate</button>
            </div>
    </div>

  );
};

export default FeeEstimator;
