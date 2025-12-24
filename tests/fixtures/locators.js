exports.LOCATORS = {
    home: {
        signupLoginButton: "a[href='/login']",
        loggedInAs: "a:has-text('Logged in as')",
        deleteAccountButton: "a[href='/delete_account']",
        accountDeletedMessage: "b:has-text('Account Deleted!')"
    },

    login: {
        loginHeader: "h2:has-text('Login to your account')",
        emailInput: "input[data-qa='login-email']",
        passwordInput: "input[data-qa='login-password']",
        loginButton: "button[data-qa='login-button']",
        errorMessage: "p:has-text('Your email or password is incorrect!')",
        invalidLoginMessage: 'p:has-text("Your email or password is incorrect!")'
    },

    afterLogin: {
        logoutButton: "a[href='/logout']"
    },

    register: {
        newUserSignupHeader: "h2:has-text('New User Signup!')",
        signupNameInput: "input[data-qa='signup-name']",
        signupEmailInput: "input[data-qa='signup-email']",
        signupButton: "button[data-qa='signup-button']",

        enterAccountInfoHeader: "h2:has-text('Enter Account Information')",
        genderMrRadio: "#id_gender1",
        passwordInput: "#password",
        dayDropdown: "#days",
        monthDropdown: "#months",
        yearDropdown: "#years",
        newsletterCheckbox: "#newsletter",
        offersCheckbox: "#optin",

        firstName: "#first_name",
        lastName: "#last_name",
        company: "#company",
        address1: "#address1",
        address2: "#address2",
        countryDropdown: "#country",
        state: "#state",
        city: "#city",
        zipcode: "#zipcode",
        mobileNumber: "#mobile_number",

        createAccountButton: "button[data-qa='create-account']",
        accountCreatedMessage: "h2:has-text('Account Created!')",
        continueButton: "a[data-qa='continue-button']"
    }
};
