const { findById, findOne } = require("../model/counterSchema");
const counter = require("../model/counterSchema");
const employee = require("../model/empSchema");

const addEmp = async (req, res) => {
  try {
    // counter.findByIdAndUpdate(
    //   { id: "auto-val" },
    //   { $inc: { seq: 1 } },
    //   { new: true },
    //   (err, cd) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(cd);
    //       if (cd == null) {
    //         const newVal = new counter({ id: "auto-val", seq: "1" });
    //         newVal.save();
    //         empId = 1;
    //       } else {
    //         empId = cd.seq;
    //       }
    //     }
    //   }
    // );
    const seq_m = await counter.findOne({id:"auto-val"});
    console.log(seq_m);
    if(!seq_m){
        const seq_model = new counter({
            id:"auto-val",
            seq:1
        });
        seq_model.save();
    }
    else{
        console.log("here\n");
        await seq_m.updateOne({ $inc: { seq: 1 } });
    }
    const empId = await counter.findOne({id:"auto-val"});
    // console.log(empId.schema.tree.seq);
    const data = new employee({
      name: req.body.name,
      empId: empId.seq,
      age: req.body.age,
      department: req.body.department,
      locality: req.body.locality,
      status: req.body.status,
      city: req.body.city,
      createdById: req.body.userId,
      createdAt: req.body.createdAt,
      createdBy: req.body.rootUser.username,
    });

    await data.save();
    console.log(data);
    return res.status(201).json({ status: 201, empId: data.empId });
  } catch (error) {
    console.log("Error in addEmp: ", error);
    return res.status(401).json({ error: error });
  }
};

module.exports = addEmp;
