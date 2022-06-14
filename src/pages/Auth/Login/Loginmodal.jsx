import './Login.css'

const Loginmodal = () => {
        return(
            <div className="modal fixed inset-0 bg-[#E5E5E5] bg-wb-overlay flex justify-center items-center modal-active">
                <div className="auth-modal flex flex-col items-center bg-white rounded-lg fadeIn login-fieldset">
                    <div className="relative bg-white rounded-3xl">
                        <div className="px-12 pb-10 pt-12" style={{width:"626.2px"}}>
                            <h1 className="text-center font-bold mb-2 px-4" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "24px", lineHeight: "32px"}}>New on HerVest</h1>
                            <p className="text-center text-gray-600 px-4 pb-10" style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "14px", lineHeight: "18px"}}>
                                You're at the right place! At HerVest, you grow your money and grow into your best self. Here's why you'll love it here.
                            </p>

                            <div className='absolute right-2 top-2 ' >
                                <button type="button" className="text-gray-400 bg-[#D43E8A]  hover:bg-[#D43E8A] hover:text-gray-900 rounded-lg text-sm p-1 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                </button>
                               
                            </div>

                            <div className="grid grid-rows-3 gap-4">
                                {/* <div className='' >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#5B2E4F]"  viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                        
                                    <span className="text-[#5B2E4F] font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "27px"}}>Easy to use</span>
                                    <p className='px-8' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: ""}}>We offer easy-to-use platform designs, frictionless user experience and a guided approach to investing for women.</p> 
                                </div> */}
                                 <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#5B2E4F]"  viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                        
                                    <span className="text-[#5B2E4F] font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "27px"}}>Easy to use</span>
                                    <p className='px-8' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>We offer easy-to-use platform designs, frictionless user experience and a guided approach to investing for women.</p> 
                                </div>
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#5B2E4F]"  viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                        
                                    <span className="text-[#5B2E4F] font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "27px"}}>Safe</span>
                                    <p className='px-8' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>All funds are held and managed by FBNQuest Trustees Limited, a member of the FBN Holdings on behalf of HerVest. FBNQuest Trustees Limited is regulated by the Securities and Exchange Commission (SEC).</p> 
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-[#5B2E4F]"  viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    
                                    <span className="text-[#5B2E4F] font-bold" style={{fontFamily: 'Satoshi', fontWeight: "700px",fontSize: "20px", lineHeight: "27px"}}>Women-centered Support</span>
                                    <p className='px-8' style={{fontFamily: 'Satoshi', fontWeight: "400px",fontSize: "16px", lineHeight: "24px"}}>We are available to help you navigate through your everyday issues or deep women issues.</p> 
                                </div>
                            </div>


                        </div>
                    
                    </div>    
                       
                 </div>
            </div>
    )
}

export default Loginmodal