const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const lockContractFactory = await hre.ethers.getContractFactory("Lock");
    const lockContract = await lockContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1"),
    });

    let contractBalance = await hre.ethers.provider.getBalance(
      lockContract.address
    );
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );

    await lockContract.deployed();
    console.log("Contract deployed to:", lockContract.address);
    console.log("Owner of the contract:", owner.address);

    const randNums = await lockContract.logicOfLuck("0.23");
    await randNums.wait();

    contractBalance = await hre.ethers.provider.getBalance(lockContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();