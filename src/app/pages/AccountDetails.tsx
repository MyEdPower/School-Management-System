import { useParams, Link } from 'react-router-dom';
import { getUserById, getClassById } from '../data/mockData';

export function AccountDetails() {
  const { id } = useParams<{ id: string }>();
  const user = id ? getUserById(id) : null;
  
  if (!user) {
    return <div className="p-[64px]">User not found</div>;
  }
  
  const userClasses = user.classes?.map(classId => getClassById(classId)).filter(Boolean) || [];
  
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white border-b border-[#ebebeb]">
        <div className="max-w-[1440px] mx-auto px-[64px] py-[32px] pb-[24px]">
          <Link to="/accounts" className="text-[#5779C9] hover:underline mb-[8px] inline-block">
            ← Back to Accounts
          </Link>
          <h1 className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#333]">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-[16px] text-[#666]">{user.email}</p>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-[64px] py-[32px]">
        <div className="grid grid-cols-3 gap-[24px]">
          {/* User Information */}
          <div className="col-span-2">
            <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px] mb-[24px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[24px]">Profile Information</h2>
              
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <label className="text-[14px] text-[#666] mb-[4px] block">First Name</label>
                  <input 
                    type="text" 
                    value={user.firstName} 
                    readOnly
                    className="w-full px-[12px] py-[8px] border border-[#e0e0e0] rounded bg-[#f9f9f9]"
                  />
                </div>
                <div>
                  <label className="text-[14px] text-[#666] mb-[4px] block">Last Name</label>
                  <input 
                    type="text" 
                    value={user.lastName} 
                    readOnly
                    className="w-full px-[12px] py-[8px] border border-[#e0e0e0] rounded bg-[#f9f9f9]"
                  />
                </div>
                <div>
                  <label className="text-[14px] text-[#666] mb-[4px] block">Email</label>
                  <input 
                    type="email" 
                    value={user.email} 
                    readOnly
                    className="w-full px-[12px] py-[8px] border border-[#e0e0e0] rounded bg-[#f9f9f9]"
                  />
                </div>
                <div>
                  <label className="text-[14px] text-[#666] mb-[4px] block">Role</label>
                  <input 
                    type="text" 
                    value={user.role.charAt(0).toUpperCase() + user.role.slice(1)} 
                    readOnly
                    className="w-full px-[12px] py-[8px] border border-[#e0e0e0] rounded bg-[#f9f9f9]"
                  />
                </div>
                <div>
                  <label className="text-[14px] text-[#666] mb-[4px] block">District</label>
                  <input 
                    type="text" 
                    value={user.district} 
                    readOnly
                    className="w-full px-[12px] py-[8px] border border-[#e0e0e0] rounded bg-[#f9f9f9]"
                  />
                </div>
                <div>
                  <label className="text-[14px] text-[#666] mb-[4px] block">Status</label>
                  <input 
                    type="text" 
                    value={user.status.charAt(0).toUpperCase() + user.status.slice(1)} 
                    readOnly
                    className="w-full px-[12px] py-[8px] border border-[#e0e0e0] rounded bg-[#f9f9f9]"
                  />
                </div>
              </div>
              
              <div className="flex gap-[8px] mt-[24px]">
                <button className="px-[16px] py-[8px] bg-[#343a6f] text-white rounded hover:bg-[#2a2f5a]">
                  Edit Profile
                </button>
                <button className="px-[16px] py-[8px] border border-[#707070] rounded hover:bg-gray-50">
                  Reset Password
                </button>
              </div>
            </div>
            
            {/* Assigned Classes */}
            {user.role !== 'student' && (
              <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
                <h2 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#121212] mb-[24px]">Assigned Classes</h2>
                
                {userClasses.length > 0 ? (
                  <div className="space-y-[12px]">
                    {userClasses.map(classItem => classItem && (
                      <div key={classItem.id} className="border border-[#e0e0e0] rounded-[8px] p-[16px] flex justify-between items-center">
                        <div>
                          <h3 className="font-['Rubik:Medium',sans-serif] text-[16px] text-[#121212]">{classItem.name}</h3>
                          <p className="text-[14px] text-[#666]">{classItem.grade} • {classItem.subject}</p>
                        </div>
                        <Link 
                          to={`/class/${classItem.id}`}
                          className="px-[12px] py-[6px] border border-[#707070] rounded text-[14px] hover:bg-gray-50"
                        >
                          View Class
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[14px] text-[#666]">No classes assigned</p>
                )}
              </div>
            )}
          </div>
          
          {/* Activity Summary */}
          <div className="space-y-[24px]">
            <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212] mb-[16px]">Account Status</h2>
              
              <div className="space-y-[12px]">
                <div>
                  <p className="text-[14px] text-[#666] mb-[4px]">Status</p>
                  <span className={`px-[8px] py-[4px] rounded-full text-[12px] ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </div>
                
                <div>
                  <p className="text-[14px] text-[#666] mb-[4px]">Last Login</p>
                  <p className="font-['Rubik:Medium',sans-serif]">{user.lastLogin || 'Never'}</p>
                </div>
                
                <div>
                  <p className="text-[14px] text-[#666] mb-[4px]">Member Since</p>
                  <p className="font-['Rubik:Medium',sans-serif]">January 2025</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212] mb-[16px]">Permissions</h2>
              
              <div className="space-y-[8px]">
                <div className="flex items-center justify-between">
                  <span className="text-[14px]">Create Assessments</span>
                  <span className="text-[14px] text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px]">Manage Classes</span>
                  <span className="text-[14px] text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px]">View Reports</span>
                  <span className="text-[14px] text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px]">Manage Users</span>
                  <span className="text-[14px] text-green-600">✓</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[18px] text-[#121212] mb-[16px]">Actions</h2>
              
              <div className="space-y-[8px]">
                <button className="w-full px-[12px] py-[8px] border border-[#707070] rounded text-[14px] hover:bg-gray-50 text-left">
                  Send Email
                </button>
                <button className="w-full px-[12px] py-[8px] border border-[#707070] rounded text-[14px] hover:bg-gray-50 text-left">
                  View Activity Log
                </button>
                <button className="w-full px-[12px] py-[8px] border border-[#E54742] text-[#E54742] rounded text-[14px] hover:bg-red-50 text-left">
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}