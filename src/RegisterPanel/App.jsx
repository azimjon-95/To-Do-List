import React, { useState } from "react";
import './Style.css';
import Logo from './Img/logo.png'
import Map from './Img/image 97.png'
import Download from './Img/download.png'
import Email from './Img/email 1.png'
import Location from './Img/pin.png'
import Coll from './Img/Vector.png'
import Facebook from './Img/1.png'
import twiter from './Img/2.png'
import Insta from './Img/3.png'
import Ink from './Img/4.png'

import dubai from './Img/dubai.jpg'
import kitay from './Img/kitay.jpg'
import london from './Img/london.jpg'
import newyork from './Img/newyork.jpg'

const App = () =>{

    const [formData, setFormData] = useState({
        labels: "",  garages:"", dimen:"", legit:"", virtual:"",
        beds: "", baths:"", home:"", rooms:"", latidu:"", frend:"", 
        materils: "",link:"", title:"", types:"", lot:"",
        Description:"", ID:"", label:"", bed:"", bulid:"", 
        price:"", prefix:"", suffix:"", custom:"", maps:"", 
    })
 
    // const [chek1, setChek1] = useState(false)
    // const [chek2, setChek2] = useState(false)
    // const [chek3, setChek3] = useState(false)
    // const [chek4, setChek4] = useState(false)
    // const [chek5, setChek5] = useState(false)
    // const [chek6, setChek6] = useState(false)
    // const [chek7, setChek7] = useState(false)
    // const [chek8, setChek8] = useState(false)
    // const [chek9, setChek9] = useState(false)
    // const [chek10, setChek10] = useState(false)
    // const [chek11, setChek11] = useState(false)
    // const [chek12, setChek12] = useState(false)
    // const [chek13, setChek13] = useState(false)
    // const [chek14, setChek14] = useState(false)
    // const [chek15, setChek15] = useState(false)
    // const [chek16, setChek16] = useState(false)
    // const [chek17, setChek17] = useState(false)
    // const [chek18, setChek18] = useState(false)
    // const [chek19, setChek19] = useState(false)
    // const [chek20, setChek20] = useState(false)

    // const [naMe1, setName1] = useState('')
    // const [naMe2, setName2] = useState('')
    // const [naMe3, setName3] = useState('')

    
    // const login = ()=>{
    //     console.log(chek1);
    //     console.log(chek2);
    //     console.log(chek3);
    //     console.log(chek4);
    //     console.log(chek5);
    //     console.log(chek6);
    //     console.log(chek7);
    //     console.log(chek8);
    //     console.log(chek9);
    //     console.log(chek10);
    //     console.log(chek11);
    //     console.log(chek12);
    //     console.log(chek13);
    //     console.log(chek14);
    //     console.log(chek15);
    //     console.log(chek16);
    //     console.log(chek17);
    //     console.log(chek18);
    //     console.log(chek19);
    //     console.log(chek20);
  
    //     console.log(formData);

    //     console.log(naMe1);
    //     console.log(naMe2);
    //     console.log(naMe3);
    // }


    
    return(
        <> 
        {/* navbar */}
        <div className="Navbar">
            <div className="LinkBox">
                <img src={Logo}/>
                <div className="Links">
                    <a href="">Home</a>
                    <a href="">Properties</a>  
                    <a href="">Contacts</a>
                </div>
            </div>
        </div>
        <div className="Container">
            <p>Add new property</p>

            {/* Main */}
            <div className="Main">
                <p>Contact information</p>


                <div className="inp_con_box">
                    <div class="inp_con">
                        <input value={formData.labels} onChange={(e)=> setFormData({...formData, labels: e.target.value})} class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Property title*</label>
                    </div>
    
                    <div class="inp_con">
                        <input value={formData.beds} onChange={(e)=> setFormData({...formData, beds: e.target.value})} class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Type</label>
                    </div>
                </div>
                
                <div className="ino-Bottom">
                    <div class="inp_con  inp_con1">
                        <input value={formData.Description} onChange={(e)=> setFormData({...formData, Description: e.target.value})} class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Property Description*</label>
                    </div>
                </div>
                
                
            </div>

            {/* Section-1 */}
            <div className="Section-1">
                <p>Additional</p>
                <div className="Sec-Add">
                    <div className="AddBox">
                        <div class="inp_con inp_con1">
                            <input  value={formData.ID} onChange={(e)=> setFormData({...formData, ID: e.target.value})}    class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Property ID</label>
                        </div>
        
                        <div class="inp_con inp_con1">
                            <input  value={formData.label} onChange={(e)=> setFormData({...formData, label: e.target.value})}  class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Label</label>
                        </div>
                        <div class="inp_con inp_con1">
                            <input  value={formData.bed} onChange={(e)=> setFormData({...formData, bed: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Beds</label>
                        </div>
        
                        <div class="inp_con inp_con1">
                            <input  value={formData.bulid} onChange={(e)=> setFormData({...formData, bulid: e.target.value})}    class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Year bulid</label>
                        </div>
                        <div class="inp_con inp_con1">
                            <input  value={formData.lot} onChange={(e)=> setFormData({...formData, lot: e.target.value})}    class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Lot area (sqft)</label>
                        </div>
     
                    </div>
                    <div className="AddBox">
                        <div class="inp_con inp_con1">
                            <select  onChange={(e) => setName3(e.target.value)}  className="Select">
                                <option>Parent property</option>
                                <option value="1" >1</option>
                                <option>Namangan Pop</option>
                                <option>Dubai</option>
                            </select>
                        </div>
        
                        <div class="inp_con inp_con1">
                            <input  value={formData.materils} onChange={(e)=> setFormData({...formData, materils: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Material</label>
                        </div>
                        <div class="inp_con inp_con1">
                            <input  value={formData.baths} onChange={(e)=> setFormData({...formData, baths: e.target.value})}  class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Baths</label>
                        </div>
        
                        <div class="inp_con inp_con1">
                            <input  value={formData.home} onChange={(e)=> setFormData({...formData, home: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Home area (sqft)</label>
                        </div>
                 
                    </div>
                    <div className="AddBox">
                        <div class="inp_con inp_con1">
                            <select  onChange={(e) => setName2(e.target.value)} className="Select">
                                <option>Status</option>
                                <option value="Student">Student</option>
                                <option>1</option>
                                <option></option>
                            </select>

                        </div>
        
                        <div class="inp_con inp_con1">
                            <input  value={formData.rooms} onChange={(e)=> setFormData({...formData, rooms: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Rooms</label>
                        </div>
                        <div class="inp_con inp_con1">
                            <input  value={formData.garages} onChange={(e)=> setFormData({...formData, garages: e.target.value})}    class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Garages</label>
                        </div>
        
                        <div class="inp_con inp_con1">
                            <input  value={formData.dimen} onChange={(e)=> setFormData({...formData, dimen: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Lot dimensions</label>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Section-2 */}

            <div className="Section-2">
                <p>Price</p>


                <div className="inp_con_box">
                    <div class="inp_con">
                        <input  value={formData.price} onChange={(e)=> setFormData({...formData, price: e.target.value})}   class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Price ($)</label>
                    </div>
    
                    <div class="inp_con ">
                        <input  value={formData.prefix} onChange={(e)=> setFormData({...formData, prefix: e.target.value})}   class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Price Prefix</label>
                    </div>
                </div>

                <div className="inp_con_box IC-bottom">
                    <div class="inp_con">
                        <input  value={formData.suffix} onChange={(e)=> setFormData({...formData, suffix: e.target.value})}    class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Price Suffix</label>
                    </div>
    
                    <div class="inp_con">
                        <input  value={formData.custom} onChange={(e)=> setFormData({...formData, custom: e.target.value})}    class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Price Custom</label>
                    </div>
                </div>



            </div>

            {/* Section-3 Location*/}

            <div className="Section-3">
                <p>Contact information</p>
                <div className="Location-top">
                    
                    <div className="inp_con_box">
                        <div class="inp_con ">
                            <select  onChange={(e) => setName1(e.target.value)} className="Select">
                                <option>Regions</option>
                                <option value="New York">New York</option>
                                <option value="Namangan Pop">Namangan Pop</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>
                    
                        <div class="inp_con">
                            <input  value={formData.frend} onChange={(e)=> setFormData({...formData, frend: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Friendly address</label>
                        </div>
                    </div>
                    
                    <div className="ino-Bottom2">
                        <div class="inp_con  inp_con1">
                            <input  value={formData.maps} onChange={(e)=> setFormData({...formData, maps: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Map location</label>
                        </div>
                    </div>
                </div>
                <div className="World-Map"><img src={Map}/></div>

                <div className="Location-bottom">
                    <div className="inp_con_box">
                        <div class="inp_con">
                            <input  value={formData.latidu} onChange={(e)=> setFormData({...formData, latidu: e.target.value})}   class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Latidude</label>
                        </div>
         
                        <div class="inp_con">
                            <input  value={formData.legit} onChange={(e)=> setFormData({...formData, legit: e.target.value})}    class="inp_email" id="e" type="text" required />
                            <label class="labal_email" for="e">Logtitude</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section-4 */}
 
            <div className="Section-4">
                <p>Media</p>
                <h5>Featured image</h5>
                <div className="ImgsBox">
                    <div className="Imgs">
                        <img src={dubai}/>
                    </div>
                    <div className="Imgs">
                        <img src={kitay}/>
                    </div>
                    <div className="Imgs">
                        <img class="img3" src={london}/>
                    </div>
                    <div className="Imgs">
                        <img src={newyork}/>
                    </div>
                </div>

                
                <div className="Btn-box">
                    <button className="Btn">Upload</button>
                    <h5>Gallery</h5>
                    <button className="Btn">Upload</button>

                    <h5>Attachment</h5>
                    <span>
                        <img src={Download}/>
                        <h5>test_property.pdf</h5>
                    </span>
                    <button className="Btn">Upload</button>
                </div>



                <div className="ino-Bottom">
                    <div class="inp_con  inp_con1">
                        <input  value={formData.virtual} onChange={(e)=> setFormData({...formData, virtual: e.target.value})}    class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Video link</label>
                    </div>
                </div>
                <div className="ino-Bottom top">
                    <div class="inp_con  inp_con1">
                        <input  value={formData.link} onChange={(e)=> setFormData({...formData, link: e.target.value})}    class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Virtual tour</label>
                    </div>
                </div>
            </div>

            {/* Section-5 */}

            <div className="Section-5">
                <p>Amenities</p>
                <div className="ChakBoxs">
                    <div className="Chaks">
                        <span>
                            <input onChange={e=>setChek1(e.target.checked)}  type="checkbox"/>
                            <p>Air conditioning </p>
                        </span>
                        <span>
                           <input onChange={e=>setChek2(e.target.checked)}  type="checkbox"/>
                            <p>Barbeque</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek3(e.target.checked)}  type="checkbox"/>
                            <p>Dryer</p>
                        </span>
                        <span>
                            <input  onChange={e=>setChek4(e.target.checked)}   type="checkbox"/>
                            <p>Gym</p>
                        </span>
                        <span>
                            <input  onChange={e=>setChek5(e.target.checked)}  type="checkbox"/>
                            <p>Laundry</p>
                        </span>
                    </div>
                    <div className="Chaks">
                        <span>
                            <input onChange={e=>setChek6(e.target.checked)}   type="checkbox"/>
                            <p>Lawn</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek7(e.target.checked)}  type="checkbox"/>
                            <p>Microwave</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek8(e.target.checked)}  type="checkbox"/>
                            <p>Outdoor Shower</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek9(e.target.checked)}  type="checkbox"/>
                            <p>Refrigerator</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek10(e.target.checked)}  type="checkbox"/>
                            <p>Stunning views</p>
                        </span>
                    </div>
                    <div className="Chaks">
                        <span>
                            <input onChange={e=>setChek11(e.target.checked)}  type="checkbox"/>
                            <p>Dining Room</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek12(e.target.checked)}  type="checkbox"/>
                            <p>Fireplace</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek13(e.target.checked)}  type="checkbox"/>
                            <p>Pets Allowed</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek14(e.target.checked)}  type="checkbox"/>
                            <p>Unit Washer/Dryer</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek15(e.target.checked)}  type="checkbox"/>
                            <p>Onsite Parking</p>
                        </span>
                    </div>
                    <div className="Chaks">
                        <span>
                            <input onChange={e=>setChek16(e.target.checked)}  type="checkbox"/>
                            <p>Waterfront</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek17(e.target.checked)}  type="checkbox"/>
                            <p>Parking</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek18(e.target.checked)}  type="checkbox"/>
                            <p>Doorman</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek19(e.target.checked)}  type="checkbox"/>
                            <p>Central Heating</p>
                        </span>
                        <span>
                            <input onChange={e=>setChek20(e.target.checked)}  type="checkbox"/>
                            <p>Cleaning Service</p>
                        </span>
                    </div>
                </div>
            </div>

            {/* Section-6 */}

            <div className="Section-6">
                <p>Select Energy Class</p>

                <div className="inp_con_box">
                    <div class="inp_con">
                        <input  value={formData.title} onChange={(e)=> setFormData({...formData, title: e.target.value})}    class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Property title*</label>
                    </div>
    
                    <div class="inp_con">
                        <input  value={formData.types} onChange={(e)=> setFormData({...formData, types: e.target.value})}   class="inp_email" id="e" type="text" required />
                        <label class="labal_email" for="e">Type</label>
                    </div>
                </div>
            </div>

            {/* Section-7 */}

            <div className="Btn-Box">
                <button onClick={login}>Save</button>
            </div>
            {/* Footer */}
            
        </div>

        <div className="Footer">

            <div className="Footer-Top">
                <div className="FooLinks">
                    <b>Contact Us</b>

                    <span>
                        <img src={Location}/>
                        <a href="">329 Queensberry Street, North Melbourne VIC 3051, Australia.</a>
                    </span>
                    <span>
                        <img src={Coll}/>
                        <a href="">123 456 7890</a>
                    </span>
                    <span>
                        <img src={Email}/>
                        <a href="">support@houzing.com</a>
                    </span>

                    <div className="bootom-link">
                    <span><img src={Facebook}/></span>
                    <span><img src={twiter}/></span>
                    <span><img src={Insta}/></span>
                    <span><img src={Ink}/></span>
                    </div>
                    
                </div>
                <div className="FooLinks">
                    <b>Discover</b>

                    <a href="">Chicago</a>
                    <a href="">Los Angeles</a>
                    <a href="">Miami</a>
                    <a href="">New York</a>
                </div>
                <div className="FooLinks">
                    <b>Lists by Category</b>

                    <a href="">Apartments</a>
                    <a href="">Condos</a>
                    <a href="">Houses</a>
                    <a href="">Offices</a>
                    <a href="">Retail</a>
                    <a href="">Villas</a>
                </div>
                <div className="FooLinks">
                    <b>Lists by Category</b>

                    <a href="">About Us</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Support Center</a>
                    <a href="">Contact Us</a>
            
                </div>
            </div>
            <div className="Footer-Bottom">
                <img src={Logo}/>
                <p>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
            </div>
        </div>
        </>
        
    )
}

export default App;