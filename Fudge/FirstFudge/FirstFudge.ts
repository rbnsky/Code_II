namespace FirstFudge {

    // Import from FudgeCore
    import f = FudgeCore;
    console.log(f);

    // Defer, but inside typescript
    window.addEventListener("load", start);

    // Nodes
    const nodeCube: f.Node = new f.Node("NodeCube");
    const nodeGround: f.Node = new f.Node("NodeGround");
    let viewport: f.Viewport;

    function start(): void {
        // Create Canvas
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        // CUBE

        // Create MeshCube
        const mesh: f.Mesh = new f.MeshCube("Cube");
        console.log(mesh);

        // Create ComponentMesh
        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        nodeCube.addComponent(cmpMesh);

        // Create Cube Material
        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        nodeCube.addComponent(cmpMaterial);

        // Scale Cube
        cmpMesh.mtxPivot.translateY(0.5);
        cmpMesh.mtxPivot.scaleZ(2);

        // Add Transform Node
        const cmpTransform: f.ComponentTransform = new f.ComponentTransform();
        nodeCube.addComponent(cmpTransform);
        console.log(nodeCube);

        // GROUND

        // Create Ground
        const meshGround: f.MeshQuad = new f.MeshQuad("Ground");

        // Create MeshGround
        const cmpMeshGround: f.ComponentMesh = new f.ComponentMesh(meshGround);
        nodeGround.addComponent(cmpMeshGround);

        // Create MeshGroundMaterial
        const mtrGround: f.Material = new f.Material("Ground", f.ShaderLitTextured);
        const cmpmtrGround: f.ComponentMaterial = new f.ComponentMaterial(mtrGround);
        cmpmtrGround.clrPrimary.set(0.2, 1, 0.7, 1);
        nodeGround.addComponent(cmpmtrGround);

        // Scale Ground
        cmpMeshGround.mtxPivot.rotateX(-90);
        cmpMeshGround.mtxPivot.scaleX(50);
        cmpMeshGround.mtxPivot.scaleY(50);
        cmpMeshGround.mtxPivot.scaleZ(10);

        nodeGround.addChild(nodeCube);
        console.log(nodeGround);

        // CAMERA

        // Create Camera
        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        // Move Camera
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(10);
        camera.mtxPivot.rotateY(180);

        // Viewport
        viewport = new f.Viewport();
        viewport.initialize("Viewport", nodeGround, camera, canvas);
        viewport.draw();
        console.log(viewport);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
        //f.Time.game.setScale(0.3);

    }

    /*
    function moveCube(): void {
    const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame;
    const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
    onst degrees: number = 360 * frameTimeInSeconds;
    nodeCube.mtxLocal.rotateY(degrees);
    nodeCube.mtxLocal.rotateX(degrees * 2);
    nodeCube.mtxLocal.rotateX(degrees / 2);
    }
    */

    function update(): void {
        const tSpeed: number = 3 / 1; //units per seconds
        const rSpeed: number = 360 / 3; //degrees per seconds
        const frametimeInMilliSeconds: number = f.Loop.timeFrameGame;
        const frametimeInSeconds: number = (frametimeInMilliSeconds / 1000);

        // Controls
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            nodeCube.mtxLocal.translateZ(tSpeed * frametimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            nodeCube.mtxLocal.translateZ(-tSpeed * frametimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            nodeCube.mtxLocal.rotateY(rSpeed * frametimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            nodeCube.mtxLocal.rotateY(-rSpeed * frametimeInSeconds);

        const up: f.Vector3 = f.Vector3.Y();

        viewport.camera.mtxPivot.lookAt(nodeCube.mtxWorld.translation,);

        f.Recycler.store(up); //Recycler

        viewport.draw();
    }

}