package JavaBackTest.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import JavaBackTest.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Car
 */
@Entity(name = "IISJavaBackTestCar")
@Table(schema = "public", name = "Car")
public class IISJavaBackTestCar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Model")
    private String model;

    @Column(name = "Speed")
    private Integer speed;


    public IISJavaBackTestCar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

     public String getModel() {
        return model;
    }

     public void setModel(String model) {
        this.model = model;
    }

     public Integer getSpeed() {
        return speed;
    }

     public void setSpeed(Integer speed) {
        this.speed = speed;
    }

}
