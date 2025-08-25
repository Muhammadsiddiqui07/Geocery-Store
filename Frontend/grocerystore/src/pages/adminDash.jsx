import backgroundImage from '../Assests/back.png'
import SideBar from '../components/Admin/sidebar'


function AdminDash() {
    return (
        <div className="bg-gray-900 h-screen"> {/* yahan h-[80vh] ki jagah h-screen */}
            <div className="relative isolate px-6  lg:px-8 h-full"> {/* h-full taake andar ka bhi poori height le */}
                {/* Background Image */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 overflow-hidden h-full"
                >
                    <img
                        src={backgroundImage}
                        alt="Background Grocery"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                <div className="flex items-center justify-start h-full w-full" >
                    <SideBar />
                </div>

            </div>
        </div>
    )
}


export default AdminDash