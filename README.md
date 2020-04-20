#installing bussiness network

composer network install -a driveloop@0.0.1.bna -c PeerAdmin@hlfv1

# Start the BNA
composer network start -c PeerAdmin@hlfv1 -n driveloop -V 0.0.1 -A admin -S adminpw

# Import the card that was generated
composer card delete -c admin@driveloop
composer card import -f admin@driveloop.card

# List out the network apps for this card
composer network list  -c admin@driveloop

# ping
composer network ping -c admin@driveloop

# list
composer network list -c admin@driveloop

# Launch REST Server
composer-rest-server -c admin@driveloop -n never