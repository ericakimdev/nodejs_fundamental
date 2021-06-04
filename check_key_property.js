// Check if a key exists inside a JS obj
// roles object
const roles = { role_name: 'admin'}

// Check if the role_name propery exists then return true or false
'role_name' in roles ? return 'yes' : return 'no';

// Using in operator
if ('role_name' in roles) {
  console.log('yes');
}

// Using hasOwnProperty()
roles.hasOwnPropery('role_name');

// When I want one property and fallback to a default value if that doesn't exist
const roleName = roles.role_name || 'default_admin';
