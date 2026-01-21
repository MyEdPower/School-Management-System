import { useState } from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data/mockData';

export function Accounts() {
  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  const filteredUsers = users.filter(user => {
    if (filterRole !== 'all' && user.role !== filterRole) return false;
    if (filterStatus !== 'all' && user.status !== filterStatus) return false;
    return true;
  });
  
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white border-b border-[#ebebeb]">
        <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[24px] lg:py-[32px] pb-[16px] sm:pb-[20px] lg:pb-[24px]">
          <h1 className="font-['Rubik:Medium',sans-serif] text-[24px] sm:text-[28px] lg:text-[32px] text-[#333]">Accounts</h1>
        </div>
      </div>
      
      <div className="px-[16px] sm:px-[32px] lg:px-[64px] py-[16px] sm:py-[24px] lg:py-[32px]">
        <div className="bg-white rounded-[8px] border border-[#d4d4d4] p-[24px]">
          {/* Filters */}
          <div className="flex items-center justify-between mb-[24px]">
            <div className="flex gap-[12px]">
              <select 
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-[12px] py-[8px] border border-[#707070] rounded"
              >
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
              
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-[12px] py-[8px] border border-[#707070] rounded"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              
              <input 
                type="text" 
                placeholder="Search by name or email..."
                className="px-[12px] py-[8px] border border-[#707070] rounded w-[300px]"
              />
            </div>
            
            <button className="px-[16px] py-[8px] bg-[#343a6f] text-white rounded hover:bg-[#2a2f5a]">
              Add New User
            </button>
          </div>
          
          {/* Users Table */}
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e0e0e0]">
                <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Name</th>
                <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Email</th>
                <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Role</th>
                <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">District</th>
                <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Status</th>
                <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Last Login</th>
                <th className="text-left py-[12px] font-['Rubik:Medium',sans-serif]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} className="border-b border-[#f0f0f0] hover:bg-[#f9f9f9]">
                  <td className="py-[12px]">
                    <Link to={`/account/${user.id}`} className="text-[#5779C9] hover:underline">
                      {user.firstName} {user.lastName}
                    </Link>
                  </td>
                  <td className="py-[12px] text-[14px] text-[#666]">{user.email}</td>
                  <td className="py-[12px]">
                    <span className={`px-[8px] py-[4px] rounded-full text-[12px] ${
                      user.role === 'admin' 
                        ? 'bg-purple-100 text-purple-800' 
                        : user.role === 'teacher'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </td>
                  <td className="py-[12px] text-[14px]">{user.district}</td>
                  <td className="py-[12px]">
                    <span className={`px-[8px] py-[4px] rounded-full text-[12px] ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-[12px] text-[14px] text-[#666]">{user.lastLogin || 'Never'}</td>
                  <td className="py-[12px]">
                    <div className="flex gap-[8px]">
                      <Link 
                        to={`/account/${user.id}`}
                        className="px-[12px] py-[4px] border border-[#707070] rounded text-[14px] hover:bg-gray-50"
                      >
                        View
                      </Link>
                      <button className="px-[12px] py-[4px] border border-[#707070] rounded text-[14px] hover:bg-gray-50">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-[64px]">
              <p className="text-[18px] text-[#666]">No users found matching your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}