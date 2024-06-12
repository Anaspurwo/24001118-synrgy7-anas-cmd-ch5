import {Router, Request, Response} from "express";
import { v4 as uuidv4 } from 'uuid'; 
import { ArrList, cars } from "../__data_mocks__/cars";
import filterCars from "../utils/filter";

const router = Router();

//GET cars
router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        cars
    })
});

//GET specific car ---- (melihat data yang terpilih saja)
router.get("/:id", (req: Request, res: Response) => {
    const getId: number = Number (req.params.id);
    const carById = filterCars(cars, getId)

    
    res.status(200).json({
        car: carById
    })
});

// UPDATE - EDIT
router.put("/:id", (req: Request, res: Response) => {
    const getId: number = Number (req.params.id);
    const {
        name, price, startRent, finishRent
    } = req.body;

    const carById = filterCars(cars, getId);

    const updatedCarById = {...carById, 
        id: getId, 
        name, 
        price, 
        startRent, 
        finishRent, 
        createdAt: "05/14/2024", 
        updatedAt: "05/20/2024"
    };

    const filterUpdatedCar = cars.filter(({id}) => id !== getId);
    filterUpdatedCar.push(updatedCarById)
    const newCarList = filterUpdatedCar.concat(updatedCarById);

    console.log({filterUpdatedCar})

    res.status(204).json({
        status: "OK",
        message: "data updated successfully",
        cars: filterUpdatedCar
    })
});

//DELETE
router.delete("/:id", (req: Request, res: Response) => {
    const getId = Number(req.params.id);

    const filterById = cars.filter(({id}) => id !== getId);

    res.status(200).json({
        status: "OK",
        message: "item Successfully delated",
        cars: filterById
    })
})


// CREATE
router.post("/create", (req: Request, res: Response) => {
    
    const {name, price, startRent, finishRent} = req.body;

    const newObj = {
        id: uuidv4(),
        name,
        price,
        startRent,
        finishRent,
        createdAt: "05/14/2024",
        updatedAt: new Date()
    }

    res.status(201).json ({
        status: "OK",
        message: "Data Successfully Created!",
        data: newObj
    });

});

export default router;

