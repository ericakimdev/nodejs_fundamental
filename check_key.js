// Check if a property key exists inside its properties
// roles obj
const roles = { role_name: 'admin'}

// Check if the role_name propery exists then return true or false
'role_name' in roles ? return 'yes' : return 'no';

if ('role_name' in roles) {
  console.log('yes');
}

roles.hasOwnPropery('role_name');

// When I want one property and fallback to a default value if that doesn't exist
const roleName = roles.role_name || 'default_admin';
