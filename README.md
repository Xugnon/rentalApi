# Car registration

**FR**
It must be possible to register a new car.

**BR**
It should not be possible to register a car with an existing license plate.
The car must be registered, by default, with availability.
The user responsible for the registration must be an administrator user.


# Car listing

**FR**
It should be possible to list all available cars.
It should be possible to list all available cars by category name.
It should be possible to list all available cars by brand name.
It should be possible to list all available cars by car name.

**BR**
The user does not need to be logged into the system.


# Specification registration on the car

**FR**
It must be possible to register a specification for a car.
It should be possible to list all specifications.
It should be possible to list all cars.

**BR**
It should be possible to register a specification for an unregistered car.
It should not be possible to register an existing specification for the same car.
The user responsible for the registration must be an administrator user.


# Car image registration

**FR**
It must be possible to register the image of the car.
It should be possible to list all cars.

**RNF**
Use multer to upload files.

**BR**
The user must be able to register more than one image for the same car.
The user responsible for the registration must be an administrator user.


# Car rental

**FR**
It must be possible to register a rental.

**BR**
The rental must have a minimum duration of 24 hours.
It should not be possible to register a new lease if there is already one open for the same user.
It should not be possible to register a new rental if there is already one open for the same car.