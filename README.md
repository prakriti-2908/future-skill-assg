1. **Clone The Repository**
   - Run the following command to clone the repository:
     ```bash
     git clone https://github.com/prakriti-2908/future-skill-assg
     ```

2. **Run Client Side**
   - Navigate to the client directory:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the client application:
     ```bash
     npm start
     ```

3. **Run Server Side**
   - Navigate to the server directory:
     ```bash
     cd ..
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the server application:
     ```bash
     npm run dev
     ```

4. **Add `.env` file in server**
   - Create a new file in the server directory named `.env`.
   - Write the following in the `.env` file:
     ```env
     PORT=5000
     MONGO_URI=`Add your mongo uri here (MongoDB Atlas), please let me know in case you need my mongo uri, Thanks!`
     ```

5. **Using the UI**
   - To filter out existing cards, write the title of the card in the search bar. Debouncing is implemented to enhance the search experience.
   - To add a new card entry to the database from the UI, click the "Submit Request" button.

