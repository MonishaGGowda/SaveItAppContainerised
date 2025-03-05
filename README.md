# SaveIt
Allows you to play around with your notes, simplifying your note making activity

**npm Packages Used:**<br>
chalk [ 3.0.0 ] - To style text as needed. Provides you with variety of options<br>
yargs [17.2.2] - To parse command line arguments

**Node version** - 18.18.2
**npm version** - 10.2.1

**To Install**<br>
git clone <repository>

**Method 1**

**Build the Docker Image**<br>
docker build -t <save-it-app-image> .

**Run the Container in Interactive Mode**<br>
docker run -it <save-it-app-image> sh

**Usage:**

node app.js - Runs the app

Add a note:
node app.js add --title=<title-name> --body=<content> 

Remove a note:
node app.js remove --title=<title-name>

List all notes:
node app.js list

Read a note based on title:
node app.js read --title=<title-name>

**Method 2**

**Run Commands Directly Without Entering the Container**<br>
docker run <save-it-app-image> node app.js add --title="Docker Note" --body="Running inside a container!"

**To list notes**<br>
docker run <save-it-app-image> node app.js list


**Stopping the Container**<br>
exit

**Method 3: If your app is designed to run as a server**

**1. Run the Container in Detached Mode**<br>
docker run -d --name <save-it-app-container> <save-it-app-image>

**2. Check If the Container Is Running**<br>
docker ps

**3. Execute the App Inside the Running Container**<br>
docker exec -it save-it-container node app.js list
docker exec -it save-it-container node app.js add --title="Docker Note" --body="Persistent Note!"
docker exec -it save-it-container node app.js remove --title="Docker Note"

**4. Stop and Restart the Container**
docker stop save-it-container
docker start save-it-container

**Persist Notes Using a Docker Volume**<br>
docker run -it -v $(pwd)/data:/app/data save-it-app sh

**Remove the Container (If Needed)**
docker rm -f save-it-container

**You are set to go!!!**
