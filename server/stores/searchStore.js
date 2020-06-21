/account/signup:
    post:
      summary: Create a new account
      operationId: signup
      parameters:
        - name: CSRF-Token
          in: header
          schema:
            type: string
          required: true
          description: Request verification token
      requestBody:
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/SignupRequest"
            example:
              nickname: "xxx"
              username: "email@domain.com"
              password: "secret"
      responses:
        '200':
          description: Access Token Response
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AuthorizedResponse"
              example:
                access_token: "xxx"
                token_type: "Bearer"
                expires_in: 360000
        '400':
          description: Invalid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ErrorResponse"
              examples:
                CSRF token missing or invalid:
                  error: "invalid_request"
                  error_description: "The header 'CSRF-Token' is missing or invalid"
                Username is required:
                  error: "invalid_request"
                  error_description: "The field 'username' is required"
                Username is invalid:
                  error: "invalid_request"
                  error_description: "The field 'username' is not a valid email"
                Username is too long:
                  error: "invalid_request"
                  error_description: "The field 'username' is too long"
                Password is required:
                  error: "invalid_request"
                  error_description: "The field 'password' is required"
                Password is too long:
                  error: "invalid_request"
                  error_description: "The field 'password' is too long"
                Password is insecure:
                  error: "invalid_request"
                  error_description: "This password does not meet the complexity requirements"
                Email already registered:
                  error: "invalid_request"
                  error_description: "This email is already associated with an existing account"
                Nickname is invalid:
                  error: "invalid_request"
                  error_description: "The field 'nickname' contains invalid characters"
                Nickname is too long:
                  error: "invalid_request"
                  error_description: "The field 'nickname' is too long"
                Nickname is already taken:
                  error: "invalid_request"
                  error_description: "This nickname is already taken"